// ROI Calculator with URL Query Parameter Synchronization

'use client';

import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import {
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const formatPrice = (price: number): string => {
  const absPrice = Math.abs(price);
  let formattedPrice: string;

  if (absPrice >= 1e6) {
    formattedPrice = `${(absPrice / 1e6).toFixed(absPrice % 1 === 0 ? 0 : 2)}M`;
  } else if (absPrice >= 1e3) {
    formattedPrice = `${(absPrice / 1e3).toFixed(absPrice % 1 === 0 ? 0 : 2)}k`;
  } else {
    formattedPrice = `${absPrice.toFixed(absPrice % 1 === 0 ? 0 : 2)}`;
  }

  return price < 0 ? `-$${formattedPrice}` : `$${formattedPrice}`;
};

const ROICalculator: React.FC = () => {
  // Function to get query parameters
  const getQueryParam = (param: string, defaultValue: any) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get(param) ? Number(params.get(param)) : defaultValue;
    }
    return defaultValue;
  };

  // Initialize state from query parameters or default values
  const [timePerTask, setTimePerTask] = useState<number>(
    getQueryParam('timePerTask', 30)
  );
  const [tasksPerMonth, setTasksPerMonth] = useState<number>(
    getQueryParam('tasksPerMonth', 100)
  );
  const [costPerHour, setCostPerHour] = useState<number>(
    getQueryParam('costPerHour', 50)
  );
  const [isYearly, setIsYearly] = useState<boolean>(
    getQueryParam('isYearly', 'true') === 'true'
  );

  // Update URL query parameters when state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);

      params.set('timePerTask', String(timePerTask));
      params.set('tasksPerMonth', String(tasksPerMonth));
      params.set('costPerHour', String(costPerHour));
      params.set('isYearly', String(isYearly));

      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [timePerTask, tasksPerMonth, costPerHour, isYearly]);

  const calculateCost = () => {
    const monthlyCost = (timePerTask / 60) * tasksPerMonth * costPerHour;
    return isYearly ? monthlyCost * 12 : monthlyCost;
  };

  const calculateReducedCost = (reductionRate: number) => {
    return calculateCost() * reductionRate;
  };

  const currentCost = calculateCost();
  const reducedCostMin = calculateReducedCost(0.15);
  const reducedCostMax = calculateReducedCost(0.25);
  const savingsMin = currentCost - reducedCostMax;
  const savingsMax = currentCost - reducedCostMin;

  const data = {
    labels: ['Current Cost', 'Cost with Altan', 'Net Savings'],
    datasets: [
      {
        label: 'Amount ($)',
        data: [-currentCost, -reducedCostMax, savingsMax],
        backgroundColor: ['#ff6384', '#36a2eb', '#70c998'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number) {
            return formatPrice(Number(value));
          },
        },
      },
    },
  };

  const [copySuccess, setCopySuccess] = useState<string>('');

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(
        () => {
          setCopySuccess('Link copied!');
          setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
        },
        () => {
          setCopySuccess('Failed to copy!');
          setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
        }
      );
    }
  };

  return (
    
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
        <Typography variant="h3" style={{ color: 'white' }} className="mb-8">
            ROI Calculator
          </Typography>
          <Stack spacing={2} width="100%" sx={{ mt: 4 }}>
            {[
              {
                label: 'Time per task (minutes)',
                value: timePerTask,
                setter: setTimePerTask,
              },
              {
                label: 'Number of tasks per month',
                value: tasksPerMonth,
                setter: setTasksPerMonth,
              },
              {
                label: 'Cost per hour ($)',
                value: costPerHour,
                setter: setCostPerHour,
              },
            ].map(({ label, value, setter }) => (
              <TextField
                key={label}
                fullWidth
                label={label}
                type="number"
                variant="filled"
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{
                  style: {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.09)',
                  },
                }}
              />
            ))}
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                    color="primary"
                  />
                }
                label="Yearly"
                style={{ color: '#fff' }}
              />
              {copySuccess && (
                <Typography variant="body2" style={{ color: '#fff' }}>
                  {copySuccess}
                </Typography>
              )}
              <Button onClick={handleShare}>
                Share
              </Button>
              
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className="color-white p-4 rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                <CardContent>
                  <Typography variant="h6" style={{ color: 'white' }}>Estimated Savings</Typography>
                  <Typography variant="h3" color="primary">
                    {formatPrice(savingsMin)} - {formatPrice(savingsMax)}
                  </Typography>
                  <Typography className={styles.period} style={{ color: 'white' }}>
                    {isYearly ? 'per year' : 'per month'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Bar data={data} options={options} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default ROICalculator;
