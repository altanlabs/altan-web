'use client';

import React from 'react';
import { Typography } from '@mui/material';
import styles from '../style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const BenefitsSection = ({ benefits, benefitHeader }) => {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <section className={styles.benefitsSection}>
      <div className="max-w-screen-lg mx-auto py-16 text-center">
        <AnimatePresence>
          {animationComplete && benefitHeader && (
            <motion.h4
              className="text-3xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {benefitHeader}
            </motion.h4>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="color-white p-4 rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <Typography variant="h5" className="mb-2">
                {benefit.title}
              </Typography>
              <Typography variant="body1">{benefit.description}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
