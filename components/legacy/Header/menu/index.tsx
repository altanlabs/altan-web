"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from './anim';
import styles from './style.module.scss';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Link from 'next/link';
import menuData from '../menuData';
import { Collapse, List, ListItemButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Add this type definition
type MenuItem = {
  id: number;
  title: string;
  newTab?: boolean;
  path?: string;
  submenu?: MenuItem[];
};

export default function Index({ closeMenu, locale }: { closeMenu: () => void; locale: string }) {
  const { t } = useTranslation(["common", "header"]);

  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);

  const toggleSubmenu = (id: number) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">

      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={closeMenu }
          width="32"
          height="32"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div>
        <List component="nav" >
          {(menuData(t) as MenuItem[]).map((item) => (
            <div key={item.id}>
              {!item.path ? (
                <ListItemButton onClick={() => toggleSubmenu(item.id)}>
                  {item.title}
                </ListItemButton>
              ) : (
                <Link href={item.path} passHref>
                  <ListItemButton component="a" onClick={closeMenu}>
                    {item.title}
                  </ListItemButton>
                </Link>
              )}

              {item.submenu && (
                <Collapse in={openSubmenuId === item.id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.path} href={subItem.path || ''} passHref>
                        <ListItemButton key={subItem.path} sx={{ pl: 4 }} onClick={closeMenu}>
                          {subItem.title}
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}>
        {/* <ThemeToggler /> */}
        <LocaleSwitcher locale={locale} />

      </motion.div>

    </motion.div>
  )
}