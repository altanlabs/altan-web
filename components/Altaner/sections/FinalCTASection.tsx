'use client';
import React from 'react';
import { Typography } from '@mui/material';
import styles from '../style.module.scss';
import TemplateCTA from './TemplateCTA';

interface FinalCTASectionProps {
  content: {
    title: string;
    description: string;
  };
  templateId: string;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ content, templateId }) => (
  <section className={styles.finalCtaSection}>
    <div className="max-w-screen-lg mx-auto py-16 text-center space-y-6">
      <Typography variant="h4" className="mb-8">
        {content.title}
      </Typography>
      <Typography variant="body1" className="mb-12">
        {content.description}
      </Typography>
      <TemplateCTA templateId={templateId} />
    </div>
  </section>
);

export default FinalCTASection;