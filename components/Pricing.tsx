"use client";

import React, { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Switch, Typography, Autocomplete, TextField } from '@mui/material';
import Checkout from './Checkout';

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  default: boolean;
};

type AddOnOption = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  default: boolean;
};

type AddOnCategory = {
  name: string;
  description: string;
  options: AddOnOption[];
};


type CheckoutItem = {
  name: string;
  price: number;
  category: 'plan' | 'addon';
};

const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  // Add more currencies as needed
];

const basePlans: Plan[] = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '2 Altaners',
      '5 Automations',
      '500 Task Executions',
      '1 User',
      'Unlimited Integrations'
    ],
    default: false
  },
  {
    name: 'Pro',
    monthlyPrice: 75,
    yearlyPrice: 69,
    features: [
      '5 Altaners',
      '25 Automations',
      '5k Task Executions',
      '5 Users',
      'Unlimited Integrations',
      'eMail Support'
    ],
    default: true
  },
  {
    name: 'Pro Max',
    monthlyPrice: 267,
    yearlyPrice: 242,
    features: [
      '10 Altaners',
      '100 Automations',
      '20k Task Executions',
      '10 Users',
      'Unlimited Integrations',
      'Dedicated Expert'
    ],
    default: false
  },
  {
    name: 'Premium',
    monthlyPrice: 500,
    yearlyPrice: 445,
    features: [
      '20 Altaners',
      'Unlimited Automations',
      '100k Task Executions',
      'Unlimited Users',
      'Unlimited Integrations',
      'Dedicated Experts'
    ],
    default: false
  },
];

const addOns: AddOnCategory[] = [
  {
    name: 'AI Users',
    description: 'Work hand in hand with AI assistants in an experimental workspace, leveraging 1,000+ app integrations to scale your business',
    options: [
      {
        name: 'Free',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
          '0.5 Million LLM Credits',
          '2 AI Users',
          'Altan Rooms: Collaborative multi-user AI interactions',
          'Blazing-fast AI responses powered by cutting-edge LLMs',
          'Access to +30k API actions across 1000+ apps',
          '100 Task Executions',
          'Basic instructions',
          '1k Knowledge Sources'
        ],
        default: true
      },
      {
        name: 'Pro',
        monthlyPrice: 48.37,
        yearlyPrice: 28.82,
        features: [
          '10 Million LLM Credits',
          '5 AI Users',
          'Altan Rooms: Collaborative multi-user AI interactions',
          'Adaptive AI: Always connected to the leading LLM across providers',
          'Access to Premium Actions',
          '5k Task Executions',
          'Advanced Prompt Engineering',
          '5k knowledge sources'
        ],
        default: false
      },
      {
        name: 'XL',
        monthlyPrice: 140.84,
        yearlyPrice: 94.22,
        features: [
          '100 Million LLM Credits',
          '25 AI Users',
          'Altan Rooms: Collaborative multi-user AI interactions',
          'Custom AI User development',
          'Enterprise-grade AI with customizable models',
          'Full access to all Premium and Exclusive Actions',
          'Unlimited Task Executions',
          'Model Fine-tuning',
          'Unlimited knowledge sources',
          'Dedicated AI support team'
        ],
        default: false
      },
    ],
  },
  {
    name: 'FormCraft',
    description: 'Ensure data collection is clean, easy to use and ready for your LLMs.',
    options: [
      {
        name: 'Free',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
          '100 responses/month',
          'Unlimited forms',
          'AI-powered form creation',
          'Basic analytics'
        ],
        default: true
      },
      {
        name: 'Pro',
        monthlyPrice: 18.37,
        yearlyPrice: 14.24,
        features: [
          '1,000 responses/month',
          'Address autocomplete',
          'Payments integration',
          'Advanced form logic',
          'Personalized user AI-generated forms'
        ],
        default: false
      },
      {
        name: 'XL',
        monthlyPrice: 91.84,
        yearlyPrice: 76.89,
        features: [
          'Unlimited responses',
          'Advanced security features',
          'Dedicated account manager',
          'Custom integrations'
        ],
        default: false
      },
    ],
  },
];

export default function PricingBuilder() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: AddOnOption | null }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [yearly, setYearly] = useState<boolean>(true);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({ USD: 1, EUR: 0.85, GBP: 0.73 });

  useEffect(() => {
    const defaultPlan = basePlans.find(plan => plan.default);
    setSelectedPlan(defaultPlan || null);

    const initialAddOns: { [key: string]: AddOnOption | null } = {};
    addOns.forEach(category => {
      const defaultOption = category.options.find(option => option.default);
      initialAddOns[category.name] = defaultOption && defaultOption.monthlyPrice === 0 && defaultOption.yearlyPrice === 0 ? defaultOption : null;
    });
    setSelectedAddOns(initialAddOns);
  }, []);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  useEffect(() => {
    let price = selectedPlan ? (yearly ? selectedPlan.yearlyPrice*12 : selectedPlan.monthlyPrice) : 0;
    Object.values(selectedAddOns).forEach(addOn => {
      if (addOn) {
        price += yearly ? addOn.yearlyPrice*12 : addOn.monthlyPrice;
      }
    });
    setTotalPrice(price);
  }, [selectedPlan, selectedAddOns, yearly]);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleAddOnSelect = (category: string, option: AddOnOption | null) => {
    setSelectedAddOns({ ...selectedAddOns, [category]: option });
  };

  const convertCurrency = (amount: number): string => {
    return (amount * exchangeRates[selectedCurrency.code]).toFixed(2);
  };

  const renderPlanSelection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {basePlans.map(plan => (
        <div
          key={plan.name}
          className={`bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${selectedPlan === plan ? 'ring-2 ring-blue-500' : ''}`}
          onClick={() => handlePlanSelect(plan)}
        >
          <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
          <div className="text-4xl font-bold mb-2">
            ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
            <span className="text-lg font-normal">/mo</span>
          </div>
          {yearly && plan.yearlyPrice < plan.monthlyPrice * 12 && (
            <div className="text-green-400 text-sm mb-4">
              Save {((1 - plan.yearlyPrice / plan.monthlyPrice ) * 100).toFixed(2)}% yearly
            </div>
          )}
          <ul className="mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderAddOns = () => (
    <div>
      {addOns.map(category => (
        <div key={category.name} className="mb-8">
          <h2 className="text-2xl font-bold">{category.name}</h2>
          <Typography className="text-gray-400" sx={{ mb: 2 }} variant="h6">{category.description}</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.options.map(option => (
              <div
                key={option.name}
                className={`bg-gray-800 rounded-lg p-6 shadow-md cursor-pointer ${selectedAddOns[category.name] === option ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => {
                  if (selectedAddOns[category.name] === option) {
                    handleAddOnSelect(category.name, null);
                  } else {
                    handleAddOnSelect(category.name, option);
                  }
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <div className="text-2xl font-bold mb-4">
                  ${yearly ? option.yearlyPrice : option.monthlyPrice}
                  <span className="text-sm font-normal">/mo</span>
                </div>
                {option.monthlyPrice === 0 ? (
                  <div className="text-green-400 text-sm mb-4">
                    Free Forever
                  </div>
                ) : (
                  yearly && option.yearlyPrice < option.monthlyPrice * 12 && (
                    <div className="text-green-400 text-sm mb-4">
                      Save {((1 - option.yearlyPrice / option.monthlyPrice ) * 100).toFixed(2)}% yearly
                    </div>
                  )
                )}
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mb-1 text-sm flex items-center">
                      <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const getButtonText = () => {
    switch (activeStep) {
      case 0:
        return "Next: Add-ons";
      case 1:
        return "Proceed to Checkout";
      case 2:
        return "Complete Registration";
      default:
        return "Next";
    }
  };

  const renderSummary = () => (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Plan</h2>
        <Autocomplete
          size="small"
          options={currencies}
          getOptionLabel={(option) => `${option.code} - ${option.name}`}
          value={selectedCurrency}
          onChange={(event, newValue) => {
            setSelectedCurrency(newValue || currencies[0]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label="Currency"
              variant="outlined"
              sx={{
                width: '200px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
            />
          )}
          sx={{
            '& .MuiAutocomplete-popupIndicator': {
              color: 'white',
            },
          }}
        />
      </div>
      <div className="flex items-center mb-4">
        <span>Billing</span>
        <div className="flex items-center ml-4">
          <span className={`mr-2 ${!yearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <Switch
            checked={yearly}
            onChange={() => setYearly(!yearly)}
            color="primary"
          />
          <span className={`ml-2 ${yearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
        </div>
      </div>
      {selectedPlan && (
        <div className="mb-4 pb-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Selected Plan</h3>
          <p>{selectedPlan.name} - {selectedCurrency.symbol}{convertCurrency(yearly ? selectedPlan.yearlyPrice*12 : selectedPlan.monthlyPrice)}/{yearly ? 'year' : 'mo'}</p>
        </div>
      )}
      {Object.entries(selectedAddOns).length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
          {Object.entries(selectedAddOns).map(([category, option]) => (
            option && (
              <div key={category} className="mb-2">
                <h4 className="font-semibold">{category}</h4>
                <p>{option.name} - {selectedCurrency.symbol}{convertCurrency(yearly ? option.yearlyPrice*12 : option.monthlyPrice)}/{yearly ? 'year' : 'mo'}</p>
              </div>
            )
          ))}
        </div>
      )}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <h3 className="text-xl font-bold">
          Total: {selectedCurrency.symbol}{convertCurrency(yearly ? totalPrice : totalPrice)}/{yearly ? 'year' : 'mo'}
        </h3>
      </div>
      <button
        className="w-full mt-4 bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 transition-colors"
        onClick={() => setActiveStep((prev) => Math.min(2, prev + 1))}
      >
        {getButtonText()}
      </button>
    </div>
  );

  const getCheckoutItems = (): CheckoutItem[] => {
    const items: CheckoutItem[] = [];

    if (selectedPlan) {
      items.push({
        name: selectedPlan.name,
        price: yearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice,
        category: 'plan'
      });
    }

    Object.entries(selectedAddOns).forEach(([category, option]) => {
      if (option) {
        items.push({
          name: `${category} - ${option.name}`,
          price: yearly ? option.yearlyPrice : option.monthlyPrice,
          category: 'addon'
        });
      }
    });

    return items;
  };

  return (
    <section className="bg-gray-900 text-white pb-20">
      <Box sx={{ px: '5vw' }}>
        <h1 className="text-4xl font-bold mb-10 text-center">Build Your Plan</h1>
        <Stepper activeStep={activeStep} alternativeLabel className="mb-12">
          {['Select Plan', 'Customize Add-ons', 'Checkout'].map((label, index) => (
            <Step key={label}>
              <StepLabel
                onClick={() => setActiveStep(index)}
                style={{ cursor: 'pointer' }}
                StepIconProps={{
                  style: { color: '#3B82F6' }
                }}
              >
                <span className="text-white">{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:pr-8 mb-8 lg:mb-0">
            {activeStep === 0 && renderPlanSelection()}
            {activeStep === 1 && renderAddOns()}
            {activeStep === 2 && (
              <Checkout
                key={selectedCurrency.code}
                currency={selectedCurrency.code}
                items={getCheckoutItems()}
                billingCycle={yearly ? 'yearly' : 'monthly'}
              />
            )}
          </div>
          <div className="lg:w-1/4">
            {renderSummary()}
          </div>
        </div>
      </Box>
    </section>
  );
}
