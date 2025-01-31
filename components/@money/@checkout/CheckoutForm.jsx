import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useStripe, useElements, ExpressCheckoutElement, PaymentElement, AddressElement, LinkAuthenticationElement } from '@stripe/react-stripe-js';
import { Box, Typography, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Iconify } from '@components/utils/Iconify';


const CheckoutForm = ({ orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { order } = useSelector((state) => state.money);
  const [isBusinessPurchase, setIsBusinessPurchase] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [taxId, setTaxId] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `https://api.altan.ai/shop/payment/complete?order_id=${orderId}`,  
      },
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      setIsProcessing(false); 
    } else {
      window.location.href = `https://api.altan.ai/shop/payment/complete?order_id=${orderId}`;  
    }
  };


  const onExpressCheckoutClick = ({ resolve }) => {
    const formattedItems = order.items.map(item => ({
      name: item.name,
      amount: Math.round(item.price * 100),
      quantity: 1,
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
      confirmParams: {
        return_url: `${window.location.origin}/order/${orderId}`,
      },
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <Box sx={{ height: '100%', width: '100%', overflowY: 'auto', overflowX: 'hidden', pb: 10 }}>
      {/* <Typography variant="h5" sx={{ fontWeight: 'semibold', mb: 2 }}>Express Checkout</Typography> */}
      <ExpressCheckoutElement
        onConfirm={onExpressCheckoutConfirm}
        onClick={onExpressCheckoutClick}
      />

      <Box sx={{ mb: 4 }}>
        {/* <Typography variant="h5" sx={{ fontWeight: 'semibold', mb: 2 }}>Pay with Card</Typography> */}
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'medium', mb: 1 }}>Email</Typography>
            <LinkAuthenticationElement
              options={{
                defaultValues: {
                  email: 'user@example.com',
                },
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'medium', mb: 1 }}>Payment Details</Typography>
            <PaymentElement
              options={{
                business: {
                  name: 'auto',
                },
                fields: {
                  billingDetails: 'auto',
                },
                wallets: {
                  applePay: 'auto',
                  googlePay: 'auto',
                },
                defaultValues: {
                  billingDetails: {
                    name: 'Jane Doe',
                    phone: '+1 (555) 555-5555',
                  },
                },
                collectBillingDetails: true,
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isBusinessPurchase}
                  onChange={(e) => setIsBusinessPurchase(e.target.checked)}
                  sx={{ color: 'grey.500', '&.Mui-checked': { color: 'blue.500' } }}
                />
              }
              label="I'm purchasing on behalf of a business"
            />
          </Box>

          {isBusinessPurchase && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'medium', mb: 1 }}>Business Information</Typography>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Business Legal Name"
                sx={{ mb: 1 }}
              />
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
                placeholder="Business Address"
                sx={{ mb: 1 }}
              />
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
                placeholder="Tax ID"
              />
            </Box>
          )}

          <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 2,
            backgroundColor: 'background.paper',
            boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}>
            <Button
              startIcon={<Iconify icon="material-symbols:encrypted" />}
              fullWidth
              size="large"
              variant="contained"
              type="submit"
              disabled={isProcessing || !stripe || !elements}
              sx={{
                width: '100%',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                '&:disabled': {
                  opacity: 0.7,
                },
              }}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </Button>
          </Box>
        </form>
      </Box>

      {errorMessage && (
        <Typography sx={{ color: 'error.main', mt: 2 }}>{errorMessage}</Typography>
      )}
    </Box>
  );
};

export default CheckoutForm;