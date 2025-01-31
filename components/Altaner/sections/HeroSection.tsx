"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../style.module.scss';
import { motion, AnimatePresence } from "framer-motion";
import TemplateCTA from './TemplateCTA';

interface HeroSectionProps {
  content: any;
  publicName: any;
  templateId: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({ content, publicName, templateId }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlayBg}></div>
      <div className={styles.content}>
        <div className="max-w-screen-lg mx-auto text-center">
          <AnimatePresence>
            {animationComplete && (
              <motion.h1
                className={`flex flex-col items-center motion-header gap-5 ${styles.gradientText} from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-6xl md:text-7xl lg:text-8xl font-bold`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {publicName ? publicName : 'Altaner'}
              </motion.h1>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {animationComplete && (
              <motion.h2
                className="text-3xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {content.title || ''}
              </motion.h2>
            )}
          </AnimatePresence>
          <TemplateCTA templateId={templateId} />
        </div>
      </div>

      <div className="animate_right px-8">
        <div className="relative">
          <Image
            src="/images/shape/shape-01.png"
            alt="shape"
            width={46}
            height={246}
            className="absolute -left-11.5 top-0"
          />
          <Image
            src="/images/shape/shape-02.svg"
            alt="shape"
            width={36.9}
            height={36.7}
            className="absolute bottom-0 right-0 z-10"
          />
          <Image
            src="/images/shape/shape-03.svg"
            alt="shape"
            width={21.64}
            height={21.66}
            className="absolute -right-6.5 bottom-0 z-1"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


{/* <AnimatePresence>
            {animationComplete && (
              <motion.h2
                className="text-3xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {content.title || 'Welcome'}
              </motion.h2>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {animationComplete && (
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {content.finalCTA?.description || 'Discover our services'}
              </motion.p>
            )}
          </AnimatePresence> */}