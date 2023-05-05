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
  '@keyframes falldown': {
    from: {
      left: 400,
    },
    to: {
      left: -300,
    },
  },
  '@keyframes fade-out': {
    '0%': {
      opacity: 1,
    },
    '25%': {
      opacity: 0.7,
    },
    '75%': {
      opacity: Math.floor(Math.random()),
    },
  },
  top: `${offset}px`,
  animation: 'falldown 6s ease-out, fade-out 4s ease-out',
  [theme.breakpoints.up('md')]: {
    '@keyframes falldown': {
      from: {
        left: 700,
      },
      to: {
        left: -900,
      },
    },
  },
  [theme.breakpoints.up('lg')]: {
    '@keyframes falldown': {
      from: {
        left: 1000,
      },
      to: {
        left: -900,
      },
    },
  },

}));

export const RainDrop = styled('div')(({ theme }) => ({
  width: '5px',
  height: '5px',
  backgroundColor: theme.palette.background.accent,
}));

export function PixelRain() {
  const [rainToRender, setRainToRender] = useState([{ key: 0, rain: '', offset: 0 }]);

  // eslint-disable-next-line no-undef
  const shouldPlayEffect = window.location.pathname === '/';

  useInterval(() => {
    if (shouldPlayEffect) {
      if (rainToRender.length > 45) {
        rainToRender.shift();
      }

      const offset = Math.floor(Math.random() * 1000);
      const key = Math.floor(Math.random() * 10000000);
      const rain = <RainDrop />;

      rainToRender.push({ offset, key, rain });
      setRainToRender([...rainToRender]);
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
