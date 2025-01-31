import { Box, Typography, Chip } from '@mui/material';
import { Iconify } from '@components/utils/Iconify';
import { formatPricing } from '../@utils';

const OrderItem = ({ item, currency }) => {
  const isSubscription = item.subscription_plan_billing !== undefined;
  const name = isSubscription ? item.subscription_plan_billing.plan.name : item.product?.name;
  const groupName = isSubscription ? item.subscription_plan_billing.plan.group.name : null;
  const imageUrl = isSubscription ? null : item.product?.additional_image_urls?.[0];
  const frequency = isSubscription ? item.subscription_plan_billing.billing_frequency : null;
  const features = isSubscription ? item.subscription_plan_billing.plan.meta_data?.features : null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Box display="flex" alignItems="center">
        {imageUrl ? (
          <Box
            component="img"
            src={imageUrl}
            alt={name}
            sx={{ width: 50, height: 50, borderRadius: '8px', mr: 2 }}
          />
        ) : isSubscription ? (
          <Box sx={{ width: 50, height: 50, mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Iconify icon="fluent-mdl2:recurring-event" width={30} height={30} />
          </Box>
        ) : (
          <Box sx={{ width: 50, height: 50, mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Iconify icon="mdi:image-off" width={30} height={30} />
          </Box>
        )}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
            <Typography>{name}</Typography>
            {isSubscription && (
              <Chip
                label={frequency.charAt(0).toUpperCase() + frequency.slice(1)}
                size="small"
                sx={{ ml: 1 }}
              />
            )}
          </Box>
          {isSubscription ? (
            <Typography variant="body2" color="text.secondary">
              {groupName} · Subscription
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Quantity · {item.quantity}
            </Typography>
          )}
        </Box>
       
        {/* {features && (
          <Tooltip title={features.join(', ')} arrow>
            <IconButton size="small" sx={{ ml: 1 }}>
              <Iconify icon="mdi:information-outline" width={20} height={20} />
            </IconButton>
          </Tooltip>
        )} */}
      </Box>
      <Typography sx={{ fontWeight: 600 }}>
        {formatPricing(item.price, currency)}
      </Typography>
    </Box>
  );
};

export default OrderItem;