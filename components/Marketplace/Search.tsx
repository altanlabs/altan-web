import React from 'react';
import { TextField, InputAdornment, MenuItem, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search({ setQuery, setType, isAppMode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', paddingLeft: '10%', paddingRight: '10%' }}>
      <TextField
        fullWidth
        label="Search..."
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          flex: 1,
          mr: 2,
          borderRadius: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '2rem', 
              borderColor: 'gray',
            },
            '&:hover fieldset': {
              borderColor: 'gray', 
            },
            '&.Mui-focused fieldset': {
              borderColor: 'gray', 
            },
            color: 'gray', 
          },
          '& .MuiInputLabel-root': {
            color: 'gray',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'gray',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: 'gray' }} /> 
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: 'gray' },
        }}
      />


      {/* {!isAppMode &&
      <TextField
        select
        label="Type"
        onChange={(e) => setType(e.target.value)}
        variant="outlined"
        sx={{ width: 140 }}  
        defaultValue="agent"
      >
        <MenuItem value="agent">Agents</MenuItem>
        <MenuItem value="flow">Flows</MenuItem>
      </TextField>} */}
    </div>
  );
}

export default Search;
