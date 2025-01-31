'use client';
import React from 'react';
import { Typography } from '@mui/material';
import styles from '../style.module.scss';

const TestimonialsSection = ({ testimonials, logos }) => (
  <section className={styles.testimonialsSection}>
    <div className="max-w-screen-lg mx-auto py-16 text-center">
      <Typography variant="h4" className="mb-12">
        {testimonials[0]}
      </Typography>
      {logos && logos.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-8 space-y-4 mt-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              width={150}
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

export default TestimonialsSection;