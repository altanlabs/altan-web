"use client";
import styles from './style.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'


function Zoom() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scaleBefore = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scaleAfter = useTransform(scrollYProgress, [0, 10], [1, 1.5]);

  const videos = [
    {
      src: "https://api.altan.ai/platform/media/4d86e2bf-cebb-47f9-b9aa-2eca51c22031",
      scale: scaleBefore,
      customStyles: {
        top: "-30vh",
        left: "-15vw",
        width: "30vw",
        height: "30vh",
        zIndex: 2 // Ensures this video is on top when they overlap
      }
    },
    {
      src: "https://api.altan.ai/platform/media/edd6ed99-654d-4268-b604-a5ceee860962",
      scale: scaleAfter,
      customStyles: {
        top: "-30vh",
        right: "-15vw",
        width: "5vw",
        height: "5vh",
        zIndex: 1 // Lower z-index for this video
      }
    }
  ];

  return (
    <>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {videos.map(({ src, scale, customStyles }, index) => (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.videoContainer} style={customStyles}>
                <video loop autoPlay muted playsInline>
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}


export default function Index() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <section className='pb-20'>
      <Zoom />
    </section>
  )
}
