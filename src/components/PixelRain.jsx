import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/node/styles';
import useInterval from '../hooks/useInterval';

const SuperContainer = styled(Box)(() => ({
  display: 'flex',
  position: 'absolute',
}));

export const PixelRainContainer = styled('div', {
  shouldForwardProp: (props) => props,
})(({ theme, offset }) => ({
  position: 'relative',
  overflow: 'clip',
  '@keyframes falldown': {
    from: {
      left: 240,
    },
    to: {
      left: -900,
    },
  },
  '@keyframes fade-out': {
    '0%': {
      opacity: 0,
    },
    '10%': {
      opacity: 1,
    },
    '25%': {
      opacity: 0.9,
    },
    '75%': {
      opacity: Math.floor(Math.random()),
    },
  },
  top: `${offset}px`,
  animation: 'falldown 4s ease-out, fade-out 4s ease-out',
  [theme.breakpoints.up('sm')]: {
    '@keyframes falldown': {
      from: {
        left: 450,
      },
      to: {
        left: -900,
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    '@keyframes falldown': {
      from: {
        left: 675,
      },
      to: {
        left: -900,
      },
    },
  },
  [theme.breakpoints.up('lg')]: {
    '@keyframes falldown': {
      '0%': {
        left: 1000,
      },
      '100%': {
        left: -700,
      },
    },
  },
  zIndex: -1,
}));

export const RainDrop = styled('div')(({ theme }) => ({
  width: '5px',
  height: '5px',
  backgroundColor: theme.palette.background.accent,
}));

export function PixelRain({ play }) {
  const [rainToRender, setRainToRender] = useState([{ key: 0, rain: '', offset: 0 }]);

  // play should automatically disable on the blog page, for convenience,
  // but should be able to be toggled.
  // eslint-disable-next-line no-undef
  const shouldPlayEffect = play || ['/', '/blog'].includes(window.location.pathname);

  useInterval(() => {
    if (play && shouldPlayEffect) {
      if (rainToRender.length > 45) {
        rainToRender.shift();
      }

      const offset = Math.floor(Math.random() * 1000);
      const key = Math.floor(Math.random() * 10000000);
      const rain = <RainDrop />;

      rainToRender.push({ offset, key, rain });
      setRainToRender([...rainToRender]);
    } else {
      // temporary till I figure out how to make the pixels fade on page change
      // without the state remaining in the whichever page is navigated to.
      setRainToRender([]);
    }
  }, 50);

  return (
    <SuperContainer>
      {rainToRender.map(({ key, rain, offset }) => (
        <PixelRainContainer key={key} offset={offset}>
          {rain}
        </PixelRainContainer>
      ))}
    </SuperContainer>
  );
}

PixelRain.propTypes = {
  play: PropTypes.bool.isRequired,
};
