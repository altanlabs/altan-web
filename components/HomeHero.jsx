"use client";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import { Highlight } from './legacy/ui/hero-highlight';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';


const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <section style={{ position: 'relative', height: '95dvh', width: '100%' }}>
      <Spline scene="https://prod.spline.design/mc38fRouvtKX3rP8/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
        <div style={{ width:'100vw', maxWidth: '1200px', paddingLeft: '1rem', paddingRight:'1rem'}}>
          <h4 className="mb-2 text-lg font-medium">
            {t("0")} {" "}
          </h4>
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
            {t("1")} {" "}
            <Highlight className="text-black dark:text-white">
              {t("2")}
            </Highlight>
          </motion.h1>

          <h3>
            {t("3")}
          </h3>
          <a href="https://app.altan.ai/form/404a3838-f835-4c50-9d8f-1929a5ad0f10" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="shadow"
              endContent={<Icon icon="majesticons:rocket-3-start" />}
              className="bg-gradient-to-r  shadow-lg mt-5 mr-2">
              Explore
            </Button>
          </a>
          <a href="https://app.altan.ai/form/404a3838-f835-4c50-9d8f-1929a5ad0f10" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="shadow"
              endContent={<Icon icon="maki:arrow" />}
              className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 shadow-lg mt-5">
              {t("4")}
            </Button>
          </a>
         
        </div>

      </div>
       
    </section>
  );
};

export default HomeHero;
