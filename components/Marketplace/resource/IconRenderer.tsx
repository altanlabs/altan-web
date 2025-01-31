

"use client";
import { Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const IconRenderer = ({ icon, size = 32, sx = {}, color = 'inherit' }) => {
  const fullSx = {
    width: size,
    height: size,
    pointerEvents: 'none',
    ...sx
  }
  if (!icon) {
    return null;
  }
  if (icon.startsWith("http")) {
    return (
      <Avatar
        sx={fullSx}
        variant='rounded'
        src={icon}
      />
    )
  }
  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {
        icon === "optimai" ? (
          <>
            <Image
              width={size}
              height={size}
              src="/images/logo/logoBlack.svg"
              alt="Logo"
              className="dark:hidden"
            />
            <Image
              width={size}
              height={size}
              src="/images/logo/logoWhite.svg"
              alt="Logo"
              className="hidden dark:block"
            />

          </>

        ) : (
          <Icon width={size} icon={icon} style={{ pointerEvents: 'none', color: color }} />
        )
      }
    </div>
  )
};

export default IconRenderer;