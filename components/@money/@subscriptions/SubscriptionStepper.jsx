import React from 'react';
import { Stepper, Step, StepLabel, useTheme, useMediaQuery } from '@mui/material';

export default function SubscriptionStepper({ planGroups, activeStep, onStepChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel={!isMobile}
      // orientation={isMobile ? 'vertical' : 'horizontal'}
      sx={{ marginBottom: 4 }}
      className="mb-12"
    >
      {planGroups.map((group, index) => (
        <Step key={group.id}>
          <StepLabel
            onClick={() => onStepChange(index)}
            StepIconProps={{
              style: { color: '#3B82F6' }
            }}
          >
            <span className="text-white">{group.name}</span>
            
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

