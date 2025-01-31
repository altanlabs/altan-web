'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Stack, ToggleButton, ToggleButtonGroup, Container, Box, Button } from '@mui/material';
import { createClient, createOrder, prepareOrderData } from '../money';
import SubscriptionPlan from './SubscriptionPlan';
import { currencyData } from '../@utils';
import { Timeline } from '@/components/legacy/ui/timeline';
import PlanSummary from './PlanSummary';
import { useFetchSubscription } from './useFetchSubscription';
import { validateAccountIds } from './helpers';
import { Convert } from 'easy-currencies'; // Import Convert from easy-currencies
import Link from 'next/link';

const currencies = Object.entries(currencyData).map(([code, data]) => ({
  code,
  name: code,
  symbol: data.symbol,
  locale: data.locale,
  icon: data.icon,
}));

export default function SubscriptionGroup({
  subscriptionIds,
  title = "Build Your Automation Plan",
  hideTotal = false,
  finalMessage = "Proceed to checkout",
  hideBuilder = false
}) {
  const [selectedPlans, setSelectedPlans] = useState({});
  const [yearly, setYearly] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0] || null); // Handle empty currencies
  const [exchangeRates, setExchangeRates] = useState({ USD: 1 }); // Default to USD
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { planGroups, isLoading: isLoadingSubscription, error: subscriptionError } = useFetchSubscription(subscriptionIds);

  // Initialize easy-currencies converter
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const convert = new Convert();
        const ratesData = await convert.from('USD').fetch(); // Fetch rates with base USD
        if (ratesData && ratesData.rates) {
          setExchangeRates(ratesData.rates);
        } else {
          console.error('Invalid exchange rate data:', ratesData);
          setExchangeRates({ USD: 1 }); // Fallback to USD
        }
      } catch (err) {
        console.error('Failed to fetch exchange rates:', err);
        setExchangeRates({ USD: 1 }); // Fallback to USD
      }
    };

    fetchExchangeRates();
  }, []);

  // Calculate plan price based on billing frequency
  const getPlanPrice = useCallback((plan) => {
    return yearly
      ? (plan.billing_options.items.find((b) => b.billing_frequency === 'yearly')?.price) || 0
      : (plan.billing_options.items.find((b) => b.billing_frequency === 'monthly')?.price) || 0;
  }, [yearly]);

  // Convert amount based on selected currency using fetched exchange rates
  const convertCurrency = useCallback((amount) => {
    if (!selectedCurrency || !selectedCurrency.code) {
      console.warn('Selected currency is not defined.');
      return `${'USD'}${(amount / 100).toFixed(2)}`; // Fallback to USD
    }

    const rate = exchangeRates[selectedCurrency.code] || 1;
    return `${selectedCurrency.symbol}${(amount / 100 * rate).toFixed(2)}`;
  }, [exchangeRates, selectedCurrency]);

  // Handle currency change
  const handleCurrencyChange = (event, newValue) => {
    setSelectedCurrency(newValue);
  };

  // Handle billing period toggle
  const handleBillingToggle = (event) => {
    setYearly(event.target.checked);
  };

  // Handle plan selection ensuring only one plan per group
  const handlePlanSelection = useCallback((plan) => {
    if (!plan || !plan.id || !plan.group || !plan.group.id) {
      console.warn('handlePlanSelection called with undefined or invalid plan:', plan);
      return;
    }

    setSelectedPlans(prev => {
      const updatedPlans = { ...prev };
      const groupId = plan.group.id;

      if (updatedPlans[groupId] && updatedPlans[groupId].id === plan.id) {
        // If the selected plan is already chosen for this group, deselect it
        delete updatedPlans[groupId];
      } else {
        // Select the new plan for this group, replacing any existing selection
        updatedPlans[groupId] = plan;
      }

      return updatedPlans;
    });
  }, []);

  const handleSubscribe = useCallback(async () => {
    if (!validateAccountIds(planGroups)) {
      setError('Invalid account IDs. Please contact support.');
      return;
    }

    try {
      setIsLoading(true);
      console.log("planGroups", planGroups)
      const client = await createClient(planGroups[0].account_id);
      const orderData = prepareOrderData(selectedPlans, selectedCurrency.code, yearly);
      orderData.client_id = client.id;
      orderData.meta_data = {
        altan_auth: true
      }
      const order = await createOrder(orderData);
      window.location.href = `https://app.altan.ai/checkout/${order.id}`;
    } catch (error) {
      console.error('Failed to create order:', error);
      setError('Failed to create order. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [planGroups, selectedPlans, selectedCurrency, yearly]);

  useEffect(() => {
    if (planGroups.length > 0 && Object.keys(selectedPlans).length === 0) {
      const defaultSelected = {};
      planGroups.forEach((group) => {
        // Assuming a free plan has a price of 0
        const freePlan = group.plans.items.find(plan => getPlanPrice(plan) === 0);
        if (freePlan) {
          defaultSelected[group.id] = freePlan;
        }
      });
      setSelectedPlans(defaultSelected);
    }
  }, [planGroups, getPlanPrice, selectedPlans]);

  if (isLoadingSubscription) return <Typography>Loading...</Typography>;
  if (subscriptionError) return <Typography color="error">{subscriptionError}</Typography>;
  if (planGroups.length === 0) return <Typography>No plan data available.</Typography>;

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8, mt: 4 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
          Simple, transparent pricing
        </Typography>
        <Typography variant="h6">
          Start for free. Upgrade to get the capacity that exactly matches your
          needs.
        </Typography>
        <Link
          className="mt-4 btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full max-w-[300px] group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
          href="https://dashboard.altan.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative inline-flex items-center">
            Get started free
            <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </span>
        </Link>
      </Box>

      {/* Existing plans grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          mb: 8,
        }}
      >
        {planGroups.map((group) => (
          <SubscriptionPlan
            key={group.id}
            plans={group.plans}
            planGroup={group}
            selectedPlans={selectedPlans}
            yearly={yearly}
            selectedCurrency={selectedCurrency}
            onPlanSelect={handlePlanSelection}
            convertCurrency={convertCurrency}
            getPlanPrice={getPlanPrice}
          />
        ))}
      </Box>
    </Container>
  );
} 


{
  /* <Timeline
        data={planGroups.map((group) => ({
          title: group.name,
          description: group?.description,
          content: (
            <SubscriptionPlan
              plans={group.plans}
              planGroup={group} // Pass the plan group
              selectedPlans={selectedPlans}
              yearly={yearly}
              selectedCurrency={selectedCurrency}
              onPlanSelect={handlePlanSelection}
              convertCurrency={convertCurrency}
              getPlanPrice={getPlanPrice}
            />
          )
        }))}
      /> */
}
{
  /* {!hideBuilder &&
        <PlanSummary
          selectedPlans={selectedPlans}
          yearly={yearly}
          selectedCurrency={selectedCurrency}
          convertCurrency={convertCurrency}
          getPlanPrice={getPlanPrice}
          onSubscribe={handleSubscribe}
          isLoading={isLoading}
          error={error}
          title={title}
          currencies={currencies}
          handleCurrencyChange={handleCurrencyChange}
          handleBillingToggle={handleBillingToggle}
        />
      } */
}