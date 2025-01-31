import { Box, Typography } from '@mui/material';
import { Iconify } from '@components/utils/Iconify';
import { currencyData } from '../@utils';
import { formatPricing } from '../@utils';

const Total = ({ total, currency }) => {
  const currencyInfo = currencyData[currency] || { symbol: currency, icon: 'mdi:currency-usd' };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      pb: '50vh',
      marginBottom: '10px'
    }}>
      <Typography variant="h3">
        Total <Iconify icon={currencyInfo.icon} width={24} height={24} sx={{ ml: 1, verticalAlign: 'middle' }} />
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '4rem' }}>
          {formatPricing(total, currency)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Iconify icon="mdi:lock" width={20} height={20} color="success.main" sx={{mr: 1}}/>
        <Typography color="success.main">
          Secure Payment
        </Typography>
      </Box>
    </Box>
  );
};

export default Total;