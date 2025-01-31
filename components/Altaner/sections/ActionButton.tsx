'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const ActionButton: React.FC<{
  onClick?: () => void;
  className: string;
  icon?: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ onClick, className, icon, children, delay = 0 }) => {
  const ButtonContent = () => (
    <>
      {icon && <Icon icon={icon} width={24} height={24} />}
      <span>{children}</span>
    </>
  );

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: delay,
      }
    }
  };

  const MotionButton = motion.button;

  const handleClick = () => {
    console.log("Button clicked!");
    onClick?.();
  };

  return (
    <MotionButton
      className={className}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <ButtonContent />
    </MotionButton>
  );
};

export default ActionButton;
