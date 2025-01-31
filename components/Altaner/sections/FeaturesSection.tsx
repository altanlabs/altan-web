'use client';
import React from 'react';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import styles from '../style.module.scss';


interface FeaturesSectionProps {
  features: string[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {

  return (
    <section className={styles.featuresSection}>
      <div className="max-w-screen-lg mx-auto py-16">

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-4">
              <Icon icon="mdi:check-circle" width={32} height={32} className="text-green-500" />
              <Typography variant="h6">{feature}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;