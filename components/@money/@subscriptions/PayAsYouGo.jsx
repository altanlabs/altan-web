"use client"

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function PayAsYouGo() {
  const PLATFORM_ID = 'e3334518-6749-48e3-b74f-8acb3f6c04ce';
  const AI_ID = '9d826b30-a6a4-4552-bc47-37205abf4540';
  const FORMS_ID = '739f42a4-cc7f-4720-b0e0-0c5953a6a00a';

  const [pricing, setPricing] = useState(null);
  const [selected, setSelected] = useState({});
  const [billingFrequency, setBillingFrequency] = useState('monthly');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogFaqs, setDialogFaqs] = useState([]);
  const [dialogTitle, setDialogTitle] = useState('');
  const [expandedGroup, setExpandedGroup] = useState(null);

  useEffect(() => {
    const fetchPricing = async () => {
      const response = await axios.get('https://api.altan.ai/platform/templates/pricing');
      let data = response.data.pricing;

      const order = [PLATFORM_ID, AI_ID, FORMS_ID];
      data = data.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

      data = data.map((group) => {
        let filteredPlans = group.plans.items
          .filter((plan) => plan.name.toLowerCase() !== 'free')
          .sort((a, b) => a.credits - b.credits);

        if (group.id === AI_ID || group.id === FORMS_ID) {
          filteredPlans = [
            {
              id: `${group.id}-zero`,
              name: '0 Credits',
              credits: 0,
              billing_options: {
                items: [
                  { billing_frequency: 'monthly', price: 0 },
                  { billing_frequency: 'yearly', price: 0 },
                ],
              },
            },
            ...filteredPlans,
          ];
        }

        return {
          ...group,
          plans: {
            ...group.plans,
            items: filteredPlans,
          },
        };
      });

      setPricing(data);
    };
    fetchPricing();
  }, []);

  const formatPrice = (priceInCents) =>
    (priceInCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const getPriceForFrequency = (plan, frequency) => {
    const opt = plan.billing_options?.items.find((o) => o.billing_frequency === frequency);
    return opt ? opt.price : 0;
  };

  const totalCost = useMemo(() => {
    if (!pricing) return 0;
    return pricing.reduce((sum, group) => {
      const currentIndex = selected[group.id] || 0;
      const plan = group.plans.items[currentIndex];
      return sum + (plan ? getPriceForFrequency(plan, billingFrequency) : 0);
    }, 0);
  }, [pricing, selected, billingFrequency]);

  const handleSliderChange = (groupId, value) => {
    setSelected((prev) => ({ ...prev, [groupId]: value }));
  };

  const openFaqDialog = (title, faqs) => {
    setDialogTitle(title);
    setDialogFaqs(faqs || []);
    setDialogOpen(true);
  };

  const isYearly = billingFrequency === 'yearly';
  const totalCostDisplay = formatPrice(totalCost) + (isYearly ? '/year' : '/mo');
  const yearlyDiscountPercentage = 100 * (2 / 12);

  const calculatePricePerCredit = (plan) => {
    if (!plan || plan.credits === 0) return 0;
    const monthlyPrice = getPriceForFrequency(plan, 'monthly');
    return (monthlyPrice / 100) / plan.credits;
  };

  const getChartData = (group) => {
    return group.plans.items
      .filter(plan => plan.credits > 0)
      .map(plan => ({
        credits: plan.credits,
        pricePerCredit: calculatePricePerCredit(plan),
        planName: plan.name
      }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {dialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md p-6 rounded shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
              onClick={() => setDialogOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-100">{dialogTitle}</h3>
            <div className="space-y-4">
              {dialogFaqs.map((faq, idx) => (
                <details key={idx} className="border-b border-gray-700 pb-2">
                  <summary className="cursor-pointer text-sm font-medium text-gray-100 flex justify-between items-center outline-none">
                    {faq.question}
                  </summary>
                  <div className="mt-2 text-sm text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-4xl p-6">
        <h1 className="text-3xl font-extrabold text-center mb-2 text-white">
          Pay as you go
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Pay only for what you need, scaling up or down whenever you want.
        </p>

        {pricing && pricing.map((group) => {
          const currentIndex = selected[group.id] || 0;
          const currentPlan = group.plans.items[currentIndex];
          const currentPrice = getPriceForFrequency(currentPlan, billingFrequency);
          const isExpanded = expandedGroup === group.id;

          return (
            <div key={group.id} className="my-8 border border-gray-700 rounded-lg p-4 bg-gray-800 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-semibold text-white">{group.name}</span>
                  <button
                    className="p-1 text-gray-400 hover:text-blue-400 transition-colors"
                    onClick={() => setExpandedGroup(isExpanded ? null : group.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  {group.meta_data?.faqs && group.meta_data.faqs.length > 0 && (
                    <button
                      className="text-sm text-blue-400 hover:text-blue-300 underline"
                      onClick={() => openFaqDialog(group.name, group.meta_data.faqs)}
                    >
                      Learn more
                    </button>
                  )}
                </div>
                <div className="font-bold text-sm text-white">
                  {formatPrice(currentPrice)}{isYearly ? '/year' : '/mo'}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 mb-6 p-4 bg-gray-900 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Price per Credit Analysis</h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={getChartData(group)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis 
                          dataKey="credits"
                          stroke="#9CA3AF"
                          tickFormatter={(value) => value.toLocaleString()}
                        />
                        <YAxis 
                          stroke="#9CA3AF"
                          tickFormatter={(value) => `$${value.toFixed(2)}`}
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                          labelStyle={{ color: '#9CA3AF' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="pricePerCredit" 
                          stroke="#3B82F6" 
                          strokeWidth={2}
                          dot={{ fill: '#3B82F6' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    The graph shows how the price per credit decreases as you purchase more credits.
                  </p>
                </div>
              )}

              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min={0}
                  max={group.plans.items.length - 1}
                  step={1}
                  value={currentIndex}
                  onChange={(e) => handleSliderChange(group.id, parseInt(e.target.value, 10))}
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="text-sm text-gray-300 whitespace-nowrap">
                  {currentPlan && `${currentPlan.credits.toLocaleString()} credits`}
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-center mt-8 space-x-3">
          <div className="inline-flex bg-gray-700 rounded-full p-1">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${!isYearly ? 'bg-blue-500 text-white shadow' : 'text-gray-300'}`}
              onClick={() => setBillingFrequency('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${isYearly ? 'bg-blue-500 text-white shadow' : 'text-gray-300'}`}
              onClick={() => setBillingFrequency('yearly')}
            >
              Yearly
            </button>
          </div>
          
        </div>

        <div className="text-center mt-10">
          <h3 className="text-2xl font-semibold mb-2 text-white">{isYearly ? 'Yearly' : 'Monthly'} Cost</h3>
          {isYearly && (
            <span className="text-sm text-green-400 font-medium ml-3">
              Save {yearlyDiscountPercentage.toFixed(1)}%
            </span>
          )}
          <p className="text-4xl font-bold text-white">{totalCostDisplay}</p>
          <button 
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition"
            onClick={() => window.location.href = 'https://dashboard.altan.ai/'}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
