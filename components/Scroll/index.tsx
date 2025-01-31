'use client';
import styles from './style.module.scss';
import FeatureCard from '@/components/legacy/FeatureCard';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';


export default function ScrollSection() {
  const { t } = useTranslation();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  const cards = [
    {
      title: t("20"),
      description: `${t("21")} ${t("27")} ${t("28")}`,
      src: "https://api.altan.ai/platform/media/ad34c5e6-65b2-4c24-954d-b7a020436a6c",
      video: "https://api.altan.ai/platform/media/9a624627-ab87-42c0-afe1-919feac2e812",
      background: "rgb(0,0,44)",
      color: "rgb(253,246,98)"
    },
    {
      title: t("40"),
      description: t("41"),
      src: "https://api.altan.ai/platform/media/6198cc84-d4cb-4063-9ecd-e771229c0075",
      background: "rgb(52,51,36)",
      color: "rgb(231,241,254)"
    },
    {
      title: "Get s*it done.",
      description: t("14"),
      src: "tree.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      background: "rgb(36,6,71)",
      color: "rgb(154,238,134)",
      component: <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -20,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_left relative mx-auto md:block md:w-1/2"
      >
        <div className="mt-7.5 flex items-center gap-5">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
            <p className="text-metatitle2 font-semibold text-white dark:text-black">
              01
            </p>
          </div>
          <div className="w-3/4">
            <h3 className="mb-0.5 text-metatitle2 text-white dark:text-black">
              {t("15")}
            </h3>
            <p> {t("16")}</p>
          </div>
        </div>
        <div className="mt-7.5 flex items-center gap-5">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
            <p className="text-metatitle2 font-semibold text-white dark:text-black">
              02
            </p>
          </div>
          <div className="w-3/4">
            <h3 className="mb-0.5 text-metatitle2 text-white dark:text-black">
              {t("17")}
            </h3>
            <p> {t("18")}</p>
          </div>
        </div>
      </motion.div>
    },
    {
      title: t("29"),
      description: `${t("30")} ${t("31")} `,
      src: "https://api.altan.ai/platform/media/813d0a81-a30c-4e3c-b218-fbd8fd07fe14",
      background: "rgb(32, 54, 27)",
      color: "rgb(240,145,249)"
    },

  ];

  return (
    <section ref={container} className={styles.main}>
      {
        cards.map((card, i) => {
          const targetScale = 1 - ((cards.length - i) * 0.05);
          return <FeatureCard key={`p_${i}`} i={i} {...card} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }
    </section>
  )
}