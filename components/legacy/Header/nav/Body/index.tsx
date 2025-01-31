import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import {Stack} from '@mui/material'
import { blur, getChars } from '@/utils/animations';
import { useState } from 'react';

export default function Body({ links, setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <Stack className={styles.body} >
      {
        links.map((link, index) => {
          const { title, href } = link;
          return (
            <Link key={`l_${index}`} href={href} onClick={()=> setIsActive(null)}>
              <motion.p
                onMouseOver={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                variants={blur}
                animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}
              >
                {getChars(title)}
              </motion.p>
            </Link>
          )
        })
      }
    </Stack>
  )
}