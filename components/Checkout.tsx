import React, { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, ExpressCheckoutElement, PaymentElement, AddressElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PuFvYGycO6I2ZvQVlwm2U1mWRQOneW9Zbv2ZZ0LqEPcfPmExLEo6irYUdsnXGBFmgAOzmGBVWKbn2xbLq1q0DMI00M124aisG');

interface CheckoutFormProps {
  clientSecret: string;
  currency: string;
  items: CheckoutItem[];
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret, currency, items }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  const onExpressCheckoutClick = ({ resolve }: { resolve: (options: any) => void }) => {
    const formattedItems = items.map(item => ({
      name: item.name,
      amount: Math.round(item.price * 100), // Convert the price to the smallest currency unit
      quantity: 1, // Assuming each item is a single unit, adjust as necessary
    }));

    const options = {
      emailRequired: true,
      lineItems: formattedItems,
    };

    resolve(options);
  };

  const onExpressCheckoutConfirm = async () => {
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Complete Your Purchase</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Express Checkout</h3>
        <ExpressCheckoutElement
          onConfirm={onExpressCheckoutConfirm}
          onClick={onExpressCheckoutClick}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Pay with Card</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Billing Details</label>
            <AddressElement
              options={{
                mode: 'billing',
                fields: {
                  phone: 'never',
                },
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Payment Details</label>
            <PaymentElement />
          </div>
          <button
            type="submit"
            disabled={isProcessing || !stripe || !elements}
            className="w-full mt-4 bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>

      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </div>
  );
};

type CheckoutItem = {
  name: string;
  price: number;
  category: 'plan' | 'addon';
};

type CheckoutProps = {
  items: CheckoutItem[];
  currency: string;
  billingCycle: 'monthly' | 'yearly';
};

const Checkout: React.FC<CheckoutProps> = ({ items, currency }) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Added to control the loading state

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post('https://api.altan.ai/shop/pay/intent', {
          items,
          currency,
        });

        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    if (!clientSecret) {  // Ensure the intent is only created once
      fetchPaymentIntent();
    }
  }, [items, currency, clientSecret]);

  const options: StripeElementsOptions = {
    clientSecret: clientSecret!,
    appearance: {
      theme: 'night',
      labels: 'floating',
    },
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state until clientSecret is ready
  }

  return (
    <div style={{ width: '100%', height: '100%', maxWidth: '600px', margin: '0 auto' }}>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} currency={currency} items={items} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
