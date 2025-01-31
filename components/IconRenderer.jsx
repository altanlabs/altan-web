import React, { lazy, memo, useRef } from 'react';
import { Avatar, Box, Link } from '@mui/material';
import Iconify from './@money/@utils/Iconify';
import { Player } from '@lottiefiles/react-lottie-player';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, minimal = false, color = null, sx, ...other }, ref) => {
  const theme = useTheme();

  const fill = color || (theme.palette.mode === "dark" ? "white" : "#212B36");

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: minimal ? 26 : 30,
        height: minimal ? 26 : 30,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg width="100%" height="100%" viewBox="0 0 84 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M83.5643 71.9914L42 0L0.435791 71.9914C9.40753 67.1723 24.6747 64 42 64C59.3253 64 74.5925 67.1723 83.5643 71.9914Z" fill={fill} />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <a  to="/" sx={{ display: 'contents' }}>
      {logo}
    </a>
  );
});

// const Player = lazy(() => import("@lottiefiles/react-lottie-player").then((module) => ({ default: module.Player })));

const IconRenderer = ({ icon, size = 16, sx = {}, color = 'inherit', className = "icon-renderer" }) => {
  const fullSx = {
    width: size,
    height: size,
    pointerEvents: 'none',
    ...sx
  }
  if (!icon) {
    return null;
  }
  if (["http"].some(prefix => icon.startsWith(prefix))) {
    return (
      <Avatar
        sx={fullSx}
        variant={'circular'}
        src={icon}
      />
    )
  }
  if (["@lottie"].some(prefix => icon.startsWith(prefix))) {
    const [, name, settings] = icon.split(":");
    const propsSettings = !!settings ? settings.split(",").reduce((obj, key) => {
      obj[key] = true;
      return obj;
    }, {}) : {}
    // if (!Object.keys(propsSettings).length) {
    //   propsSettings = {

    //   }
    // }
    const { pointerEvents, width, height, ...restSx } = fullSx;
    // console.log("rendering", name, width, height, propsSettings);
    return (
      <Player
        src={`/assets/icons/animated/${name}.json`}
        className="player"
        // loop
        // autoplay

        {...propsSettings}
        style={{
          ...restSx,
          width: width + 10,
          height: height + 10,
          ':active': {
            pointerEvents
          }
        }}
      ></Player>
    );
  }
  if (["/assets"].some(prefix => icon.startsWith(prefix))) {
    return <img alt={`icon-${icon}`} src={icon} style={fullSx} />
  }
  return (
    <Box
      className={className}
      sx={{
        minWidth: size,
        minHeight: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {
        icon === "optimai" ? (
          <Logo sx={fullSx} disabledLink />
        ) : (
          <Iconify width={size} icon={icon} sx={{ pointerEvents: 'none', color: color, ...sx }} />
        )
      }
    </Box>
  )
}

export default memo(IconRenderer);
