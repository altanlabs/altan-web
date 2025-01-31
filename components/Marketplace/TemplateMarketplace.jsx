"use client";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Highlight } from '../legacy/ui/hero-highlight';
import { Button } from '@nextui-org/react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const TemplateMarketplace = () => {
  return (
    <section style={{ position: 'relative', height: '95dvh' }}> 
      <Spline scene="https://prod.spline.design/mc38fRouvtKX3rP8/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="motion-header dark:text-white xl:text-hero"
        
      >
      
        <Highlight className="text-black dark:text-white mb-4">
            Marketplace™
        </Highlight>
      
      </motion.h1>
        <TextField
          fullWidth
          disabled
          label="Coming soon..."
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
        <div className="mt-4 flex justify-center">
          <Button className="mr-2" onClick={() => window.open('https://dashboard.altan.ai/', '_blank')}>Create your own</Button>
          <Button>Explore ( Coming soon )</Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateMarketplace;
