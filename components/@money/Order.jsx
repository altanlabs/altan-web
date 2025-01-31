import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Grid } from '@mui/material';
import { fetchOrderDetails } from '../../redux/slices/money';
import { OrderItems, OrderHeader, OrderHistory, OrderClient, PaymentDetails, ErrorView } from './@order';
import LoadingFallback from '../../routes/loader/LoadingFallback';

const Order = ({ orderId }) => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.money);
  const [localOrder, setLocalOrder] = useState(null);

  const updateOrderIfChanged = useCallback((newOrder) => {
    if (JSON.stringify(newOrder) !== JSON.stringify(localOrder)) {
      setLocalOrder(newOrder);
    }
  }, [localOrder]);

  useEffect(() => {
    if (orderId) {
      const fetchOrder = async () => {
        const result = await dispatch(fetchOrderDetails(orderId));
        updateOrderIfChanged(result.payload);
      };

      fetchOrder();

      const intervalId = setInterval(fetchOrder, 10000);

      return () => clearInterval(intervalId);
    }
  }, [dispatch, orderId, updateOrderIfChanged]);

  useEffect(() => {
    if (order) {
      updateOrderIfChanged(order);
    }
  }, [order, updateOrderIfChanged]);

  if (loading && !localOrder) return <LoadingFallback />;
  if (error) return <ErrorView error={error} />;
  if (!localOrder) return <Typography>No order found</Typography>;

  const formatDate = (dateString) => dateString ? new Date(dateString).toLocaleString() : 'N/A';

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: 'auto' }}>
      <OrderHeader order={localOrder} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <OrderItems order={localOrder}/>
          <OrderHistory order={localOrder} formatDate={formatDate} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderClient order={localOrder} />
          <PaymentDetails order={localOrder} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;