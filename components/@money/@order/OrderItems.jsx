import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { formatPricing } from '../@utils';
import OrderItem from './OrderItem';

const OrderItems = ({ order }) => (
  <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
    <Typography variant="h6" gutterBottom>Order Details</Typography>
    <List>
      {order.order_items.items.map((item) => (
        <OrderItem key={item.id} item={item} currency={order.currency} />
      ))}
      {['Subtotal', 'Tax', 'Shipping', 'Total'].map((label, index) => (
        <ListItem key={label}>
          <ListItemText primary={label} />
          <Typography variant={label === 'Total' ? 'h6' : 'body1'}>
            {formatPricing(
              index === 0 ? order.total_price - order.tax_total - order.shipping_total :
                index === 1 ? order.tax_total :
                  index === 2 ? order.shipping_total :
                    order.total_price,
              order.currency
            )}
          </Typography>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default OrderItems;