import React from 'react';
import { Paper, Typography, Box } from '@mui/material';


const getStatusLabel = (status) => {
  switch (status) {
    case 'draft':
      return 'Order placed successfully';
    case 'pending':
      return 'We received your order';
    case 'processing':
      return 'Working on your order, hold tight';
    case 'processed':
      return 'Ready to ship, almost there';
    case 'shipped':
      return 'Packed and on move';
    case 'in_transit':
      return 'Your order’s making its way to you';
    case 'delivered':
      return 'Delivered, enjoy your stuff';
    case 'cancelled':
      return 'Order cancelled, maybe next time';
    case 'return_requested':
      return 'Return requested, we’re sorting it out';
    case 'returned':
      return 'Return received, all set';
    case 'refunded':
      return 'Refund processed, check your account';
    case 'failed':
      return 'Something went wrong with the order';
    default:
      return status;
  }
};



const OrderHistory = ({ order, formatDate }) => {
  const historyItems = [
    ...(order.history?.items || [])].sort((a, b) => new Date(b.date_creation) - new Date(a.date_creation));

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>History</Typography>
      <Box sx={{ position: 'relative', pl: 3 }}>
        {historyItems.map((item, index) => (
          <Box key={item.id || 'created'} sx={{ mb: 2, position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: -20,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: index === 0 ? 'success.main' : 'grey.400',
              }}
            />
            {index < historyItems.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  left: -14,
                  top: 16,
                  bottom: -14,
                  width: 2,
                  bgcolor: 'grey.300',
                }}
              />
            )}
            <Typography variant="body1" fontWeight="bold">
              {getStatusLabel(item.status)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(item.date_creation)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default OrderHistory;