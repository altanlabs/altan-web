import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CreditCard } from '@mui/icons-material';
import { formatPricing } from '../@utils';

const PaymentDetails = ({ order }) => (
  <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
    <Typography variant="h6" gutterBottom>Payment</Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <CreditCard />
        </ListItemIcon>
        <ListItemText
          primary={`Payment ${order.payment_status}`}
          secondary={formatPricing(order.total_price, order.currency)}
        />
      </ListItem>
    </List>
  </Paper>
);

export default PaymentDetails;
