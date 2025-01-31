import { Box, Typography, Paper, Grid, Button, List, ListItem, ListItemIcon, ListItemText, Chip, CircularProgress } from '@mui/material';
import { Print, Person, Phone, Email, CreditCard } from '@mui/icons-material';

const ErrorView = ({ error }) => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Typography color="error">{error.toString()}</Typography>
  </Box>
);

export default ErrorView;




