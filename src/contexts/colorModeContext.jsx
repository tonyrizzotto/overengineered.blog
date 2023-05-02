/* global localStorage */
import {
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
import { ThemeProvider } from '@emotion/react';
import makeTheme from '../theme';

const ColorModeContext = createContext();

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (typeof context === 'undefined') {
    throw new Error('useColorMode must be used within ColorModeContext.Provider.');
  }

  const { toggleColorMode, mode } = context;
  return { toggleColorMode, mode };
}

export function getPreferredColorMode() {
  let colorMode;

  if (typeof localStorage !== 'undefined') {
    colorMode = localStorage.getItem('tr_color_mode');
  }

  if (colorMode === null) {
    return 'dark';
  }
  return colorMode;
}

// eslint-disable-next-line react/prop-types
export default function ColorMode({ play, setPlay, children }) {
  const [mode, setMode] = useState(getPreferredColorMode());

  const preferredColorMode = useMemo(
    () => ({
      /*
        When we toggle dark mode, persist in localStorage for next page and visit.
      */
      toggleColorMode: () => {
        setMode((prevMode) => {
          setPlay(true);
          localStorage.setItem('tr_prev_color_mode', prevMode);
          localStorage.setItem('tr_color_mode', prevMode === 'light' ? 'dark' : 'light');
          if (prevMode === 'light') {
            return 'dark';
          }
          return 'light';
        });
      },
      mode,
    }),
    [],
  );

  /*
    Transitions happen by a temporary state change on the color toggle.
    The toggle sets `play` to `true`, plays the animation, then after the page loads again
    play is set to `false`. Unless the toggle is selected, the transition will not play.
   */
  const themeContext = useMemo(() => makeTheme({ mode, shouldPlayTransition: play }), [mode]);

  return (
    <ColorModeContext.Provider value={preferredColorMode}>
      <ThemeProvider theme={themeContext}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
