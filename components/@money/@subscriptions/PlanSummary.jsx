import React from 'react';
import { Box, Typography, Button, Stack, Autocomplete, TextField, Switch, Tooltip } from '@mui/material';
import Iconify from '../@utils/Iconify';

export default function PlanSummary({
  selectedPlans,
  yearly,
  selectedCurrency,
  convertCurrency,
  getPlanPrice,
  onSubscribe,
  isLoading,
  error = null,
  currencies = [],
  handleCurrencyChange,
  handleBillingToggle,
}) {
  const totalPrice = Object.values(selectedPlans).reduce((sum, plan) => sum + getPlanPrice(plan), 0);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 2,
        px: {
          xs: 2, // 2$ padding for mobile
          sm: '10%' // 10% padding for larger screens
        },
        zIndex: 1300,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Autocomplete
              size="small"
              options={currencies}
              getOptionLabel={(option) => `${option.code}`}
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Currency"
                  sx={{
                    width: '140px',
                    '& .MuiInputBase-input': { color: 'white', fontSize: '0.875rem' },
                    '& .MuiInputLabel-root': { color: 'white', fontSize: '0.875rem' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: selectedCurrency ? (
                      <Iconify icon={selectedCurrency.icon} width={16} style={{ marginRight: 4 }} />
                    ) : null,
                  }}
                />
              )}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > svg': { mr: 1, flexShrink: 0 } }} {...props}>
                  <Iconify icon={option.icon} width={16} />
                  {option.code}
                </Box>
              )}
              sx={{
                '& .MuiAutocomplete-inputRoot': {
                  color: 'white',
                  borderRadius: '4px',
                },
              }}
            />

            <Box display="flex" alignItems="center" ml={2}>
              <Tooltip 
                title={yearly ? "Switch to monthly billing" : "Switch to yearly billing"}
                placement="top"
                arrow
              >
                <Switch
                  checked={yearly}
                  onChange={handleBillingToggle}
                  color="primary"
                  size="small"
                />
              </Tooltip>
              <Typography 
                variant="body2" 
                ml={1} 
                sx={{ 
                  display: { 
                    xs: 'none',
                    sm: 'block'
                  }
                }}
              >
                Yearly
              </Typography>
            </Box>
          </Box>
        </Stack>

          <Typography variant="subtitle">
            {convertCurrency(totalPrice)}/{yearly ? 'year' : 'mo'}
          </Typography>

        <button
          onClick={onSubscribe}
          disabled={Object.keys(selectedPlans).length === 0 || isLoading}
          className="ml-2 btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full max-w-[250px] group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none shadow-lg"
          style={{ boxShadow: '0 6px 12px rgba(128, 0, 128, 0.5)' }}
        >
          {isLoading ? 'Loading...' : `Checkout`} <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
        </button>
      </Box>

      {error && (
        <Typography variant="body2" color="error" mt={1}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
