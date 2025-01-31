import { Box, Typography, Chip, Button } from '@mui/material';
import { Print } from '@mui/icons-material';
import CopyableText from '@components/CopybleText';
// import generateInvoice from '../@utils/generateInvoice';

const OrderHeader = ({ order }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <ArrowBack sx={{ mr: 1, cursor: 'pointer' }} /> */}
      <CopyableText text={`#${order.id}`} cutAt={6} tooltipText="Click to copy full order ID" />
      <Chip
        label={order.status.toUpperCase()}
        color={order.status === 'completed' ? 'success' : 'primary'}
        size="small"
        sx={{ ml: 1 }}
      />
    </Box>
    <Box>
      {/* <Button onClick={generateInvoice} variant="outlined" startIcon={<Print />} sx={{ mr: 1 }}>Download Invoice</Button> */}
    </Box>
  </Box>
);

export default OrderHeader;
