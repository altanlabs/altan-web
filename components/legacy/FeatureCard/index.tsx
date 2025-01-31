'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  background: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  video?: string;
  component?: React.ReactNode;
}

const FeatureCard: React.FC<CardProps> = ({
  i, title, description, src, video, background, color, progress, range, targetScale, component
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>

      <motion.div
        style={{ backgroundColor: background, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >

        <h2 className="relative text-3xl font-bold xl:text-hero" style={{ color: color }}>
          {title}
        </h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            {!!component ? (component) : (
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                {!!video ? (
                  <video
                    style={{
                      maxHeight: 400,
                      borderRadius: 8,
                      width: '100%'
                    }}
                    loop
                    autoPlay
                    src={video}
                    controls
                    muted
                    // poster={src}
                  />
                ) : (
                  <img src={src}
                   style={{
                    maxHeight: 400,
                    borderRadius: 8,
                    width: 'auto'
                  }} />
                )}
              </motion.div>)}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FeatureCard