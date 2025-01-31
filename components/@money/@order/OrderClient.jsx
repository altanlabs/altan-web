
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person, Phone, Email } from '@mui/icons-material';

const OrderClient = ({ order }) => {
  const person = order?.client?.person;
  const customerInfo = [
    { icon: <Person />, text: person?.nickname || person?.first_name || 'N/A' },
    { icon: <Phone />, text: person?.phones?.[0]?.phone || 'N/A' },
    { icon: <Email />, text: person?.emails?.[0]?.email || 'N/A' }
  ];

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>Customer Info</Typography>
      <List>
        {customerInfo.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default OrderClient;
