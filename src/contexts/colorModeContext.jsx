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
  } else if (this.matchMedia('(prefers-color-scheme: dark)').matches()) {
    colorMode = 'dark';
  } else {
    colorMode = 'light';
  }

  return colorMode;
}

// eslint-disable-next-line react/prop-types
export default function ColorMode({ previousMode, children }) {
  const [mode, setMode] = useState(getPreferredColorMode());

  const preferredColorMode = useMemo(
    () => ({
      /*
        When we toggle dark mode, persist in localStorage for next page and visit.
      */
      toggleColorMode: () => {
        setMode((prevMode) => {
          localStorage.setItem('tr_prev_color_mode', prevMode);
          if (prevMode === 'light') {
            return 'dark';
          }
          return 'light';
        });
        localStorage.setItem('tr_color_mode', mode === 'light' ? 'dark' : 'light');
      },
      mode,
    }),
    [mode],
  );

  /*
    TODO: Need a way to properly persist prevState on mode
    This is mostly good, but only works if a page is navigated
    before toggling again. Otherwise, only the 2nd toggle doesn't
    transition properly.
   */
  const shouldPlayTransition = mode === previousMode;
  const theme = useMemo(() => makeTheme({ mode, shouldPlayTransition }), [mode]);
  return (
    <ColorModeContext.Provider value={preferredColorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
