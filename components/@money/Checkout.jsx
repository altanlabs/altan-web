import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderDetails, setUpPayment } from '../../redux/slices/money';
import { Box, Typography, Button, CircularProgress, useMediaQuery, Divider, useTheme, Card, IconButton } from '@mui/material';
import { OrderSummaryCard, Total, PaymentCard, Header } from './@checkout';


const Checkout = ({ orderId }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const { order, clientSecret, loading, error } = useSelector((state) => state.money);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [step, setStep] = useState(0); // 0 for order summary, 1 for payment

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderDetails(orderId));
    }
  }, [dispatch, orderId]);

  const handleNext = () => {
    // Dispatch handlePayNow to fetch the client secret if it's not available
    if (order && !clientSecret) {
      dispatch(setUpPayment(orderId));
      setPaymentInitiated(true);
    }
    setStep(1);
  };

  const handleBack = () => setStep(0);


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error.toString()}</Typography>
      </Box>
    );
  }

  if (!order) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography>No order found</Typography>
      </Box>
    );
  }

  return (
    
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header themeMode={theme.palette.mode} />
      <Total currency={order.currency} total={order.total_price} />

      {/* Conditional rendering without transition */}
      {step === 0 && (
        <OrderSummaryCard order={order} handleNext={handleNext} />
      )}

      {step === 1 && (
        <PaymentCard
          order={order}
          paymentInitiated={paymentInitiated}
          clientSecret={clientSecret}
          themeMode={theme.palette.mode}
          handleBack={handleBack}
        />
      )}
    </Box>
  );
};

export default Checkout;


