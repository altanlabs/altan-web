'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function BecomeReferrerPage() {

  const handleRedirect = () => {
    window.location.href = 'https://dashboard.altan.ai/referrals';
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 18 } }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '3rem', md: '4.5rem' },
            mb: 3,
            color: '#E5E7EB',
            fontWeight: 500,
            letterSpacing: '-0.02em'
          }}
        >
          Grow with us
        </Typography>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            color: 'rgb(156, 163, 175)',
            fontWeight: 400,
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.5,
            letterSpacing: '-0.01em'
          }}
        >
          Join our referral program and earn rewards while helping others
          <br />
          discover amazing AI interfaces
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleRedirect}
          sx={{
            bgcolor: 'white',
            color: '#111827',
            borderRadius: '8px',
            textTransform: 'none',
            px: 6,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 500,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)'
            }
          }}
        >
          Become a Referrer
        </Button>
      </motion.div>

      {/* Commission Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-24"
      >
        <Typography 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#E5E7EB',
            fontWeight: 500,
            mb: 2
          }}
        >
          20% Commission
        </Typography>
        <Typography 
          className="text-gray-400"
          sx={{ fontSize: '1.1rem' }}
        >
          Earn 20% commission on all referrals for 12 months
        </Typography>
      </motion.div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <BenefitCard 
          icon="solar:hand-money-linear"
          title="Earn Per Referral"
          description="Get rewarded for each new user you bring to the platform"
        />
        <BenefitCard 
          icon="solar:chart-2-linear"
          title="Unlimited Earnings"
          description="No cap on how much you can earn. Sky's the limit!"
        />
        <BenefitCard 
          icon="solar:shield-check-linear"
          title="Trusted Platform"
          description="Join thousands of successful referrers on our platform"
        />
      </div>

      {/* How It Works */}
      <div className="text-center mb-12">
        <Typography 
          variant="h3" 
          sx={{ 
            fontSize: '2.5rem',
            color: '#E5E7EB',
            mb: 8
          }}
        >
          How it works
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard 
            number="1"
            title="Sign Up"
            description="Create your free referrer account"
          />
          <StepCard 
            number="2"
            title="Get Your Link"
            description="Receive your unique referral link"
          />
          <StepCard 
            number="3"
            title="Share"
            description="Share with your network"
          />
          <StepCard 
            number="4"
            title="Earn"
            description="Get rewards for successful referrals"
          />
        </div>
      </div>
    </Container>
  );
}

function BenefitCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string; 
}) {
  return (
    <Box
      sx={{
        bgcolor: 'rgba(17, 24, 39, 0.7)',
        borderRadius: '12px',
        p: 4,
        textAlign: 'center',
      }}
    >
      <div className="inline-flex p-3 mb-4">
        <Icon icon={icon} width={32} className="text-gray-400" />
      </div>
      <Typography sx={{ 
        mb: 2,
        color: '#E5E7EB',
        fontSize: '1.25rem',
        fontWeight: 500
      }}>
        {title}
      </Typography>
      <Typography className="text-gray-400">
        {description}
      </Typography>
    </Box>
  );
}

function StepCard({ number, title, description }: { 
  number: string; 
  title: string; 
  description: string; 
}) {
  return (
    <Box
      sx={{
        bgcolor: 'rgba(17, 24, 39, 0.7)',
        borderRadius: '12px',
        p: 4,
        textAlign: 'center',
      }}
    >
      <Typography 
        sx={{ 
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#374151',
          mb: 2
        }}
      >
        {number}
      </Typography>
      <Typography sx={{ 
        mb: 1,
        color: '#E5E7EB',
        fontSize: '1.1rem',
        fontWeight: 500
      }}>
        {title}
      </Typography>
      <Typography className="text-gray-400">
        {description}
      </Typography>
    </Box>
  );
}
