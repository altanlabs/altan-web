import React from 'react'
import { motion } from 'framer-motion';
// import Image from 'next/image';
import styles from './style.module.scss';
import { opacity } from '@/utils/animations';

export default function Index({ src, isActive, isVideo, preview }) {
  return (
    <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className={styles.imageContainer}>
      {isVideo ? (
        <video
          style={{
            maxHeight: 400,
            borderRadius: 20,
            padding: 10,
            width: '100%'
          }}
          loop
          autoPlay
          src={src}
          poster={preview}
        />
      ) : (
        <img src={src} style={{
          maxHeight: 400,
          borderRadius: 20,
          padding: 10,
          width: '100%'
        }} />
      )}
    </motion.div>
  )
}