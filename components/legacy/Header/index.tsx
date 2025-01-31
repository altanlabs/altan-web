'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './nav';
import CTA from './nav/CTA';
import Logo from './nav/Logo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import menuData from './menuData';
import { Stack, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import Stairs from './stairs';
import Menu from './menu';
import { useTranslation } from 'react-i18next';


export default function index({ locale }) {
  const { t } = useTranslation(["common", "header"]);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const iconVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: 180 },
  };

  const handleMouseEnter = (id) => {
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item) => {
    if (item.isCustom) {
      return (
        <div
          key={item.id}
          className={`${styles.el} hidden md:flex items-center cursor-pointer`}
          onMouseEnter={() => handleMouseEnter(item.id)}
        >
          <span>{item.title}</span>
          <motion.span
            animate={activeMenu === item.id ? "visible" : "hidden"}
            variants={iconVariants}
            transition={{ duration: 0.2 }}
            className="ml-2"
          >
            {activeMenu === item.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </motion.span>
        </div>
      );
    } else {
      return (
        <Link key={item.id} href={item.path} className='hidden md:flex'>
          <ul className={`${styles.el} items-center cursor-pointer`}>{item.title}</ul>
        </Link>
      );
    }
  };

  return (
    <header className={`${styles.header} bg-blur dark:bg-blur`}>
      <div className="relative mx-auto max-w-c-1390 flex items-center justify-between px-4 md:px-8 2xl:px-0">
        <Logo />
        {menuData(t).map(renderMenu)}
        
        <div className='flex md:hidden'>
          <Link
            href="https://dashboard.altan.ai"
            className="flex items-center justify-center rounded-full bg-primary px-5 py-1 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
          >
            {t("common:access")}
          </Link>
          
          <IconButton onClick={() => { setMenuIsOpen(true) }} >
            <Icon width={28} icon="iconamoon:menu-burger-horizontal-bold" style={{"color": '#fff'}}/>
          </IconButton>
        </div>
        
        <CTA locale={locale} />
      </div>
      <AnimatePresence mode="wait">
        <div onMouseLeave={handleMouseLeave} style={{ display: !!activeMenu ? "block" : "none" }}>
          <Nav 
            activeMenu={activeMenu} 
            setIsActive={setActiveMenu} 
          />
        </div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {
          menuIsOpen && (
            <>
              <Stairs />
              <Menu locale={locale} closeMenu={() => setMenuIsOpen(false)} />
            </>
          )
        }
      </AnimatePresence>
      {/* <AnimatePresence mode="wait">
        <motion.div variants={background} initial="initial" animate={!!activeMenu ? "open" : "closed"} className={styles.background}></motion.div>
      </AnimatePresence> */}
    </header>
  )
}