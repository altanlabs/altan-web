import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { HighlighterItem } from '@/components/Landing/components/highlighter';
import Particles from '@/components/Landing/components/particles';

export default function SubscriptionPlan({
  plans,
  planGroup,
  selectedPlans = {},
  yearly,
  onPlanSelect,
  convertCurrency,
  getPlanPrice
}) {
  const sortedPlans = [...plans.items].sort((a, b) => getPlanPrice(a) - getPlanPrice(b));

  const formatCredits = (credits) => {
    if (credits >= 1000000) {
      const millions = credits / 1000000;
      return millions % 1 !== 0 ? millions.toFixed(1) + 'M' : Math.floor(millions) + 'M';
    } else if (credits >= 1000) {
      const thousands = credits / 1000;
      return thousands % 1 !== 0 ? thousands.toFixed(1) + 'k' : Math.floor(thousands) + 'k';
    } else {
      return credits.toString();
    }
  };

  return (
    <Grid container spacing={3} sx={{ maxWidth: '100%' }}>
      {sortedPlans.map(plan => (
        <Grid 
          item 
          xs={12} 
          md={4} // 3 cards per row on desktop
          lg={3} // 4 cards per row on larger screens
          key={plan.id}
          onClick={() => onPlanSelect(plan)}
        >
          <HighlighterItem
            className={`h-full ${
              selectedPlans?.[planGroup.id]?.id === plan.id
                ? 'ring-2 ring-blue-500 border border-blue-500'
                : 'border border-transparent'
            } cursor-pointer transition-all duration-300 hover:scale-105`}
          >
            <div className="relative h-full bg-slate-900 rounded-lg z-20 overflow-hidden">
              <Particles className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} />
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
              </div>
              <div className="flex flex-col p-6 h-full">
                <div className="absolute top-4 right-4 text-right">
                  <div className="text-xl font-bold text-white">{formatCredits(plan.credits)}</div>
                  <div className="text-sm text-gray-300">{plan.credit_type}</div>
                </div>
                <h2 className="text-xl font-bold mb-4 text-white pr-20">{plan.name}</h2>
                <div className="text-3xl font-bold mb-3 text-white">
                  {convertCurrency(getPlanPrice(plan))}
                  <span className="text-base font-normal text-white">/{yearly ? 'year' : 'mo'}</span>
                </div>

                <ul className="mb-4 flex-grow">
                  {plan.meta_data?.features?.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-start text-sm text-white">
                      <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </HighlighterItem>
        </Grid>
      ))}
    </Grid>
  );
}

SubscriptionPlan.propTypes = {
  plans: PropTypes.object.isRequired,
  planGroup: PropTypes.object.isRequired,
  selectedPlans: PropTypes.object.isRequired,
  yearly: PropTypes.bool.isRequired,
  onPlanSelect: PropTypes.func.isRequired,
  convertCurrency: PropTypes.func.isRequired,
  getPlanPrice: PropTypes.func.isRequired
};
