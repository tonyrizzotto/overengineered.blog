import {
  createContext,
  useState,
  useMemo,
  useContext,
} from 'react';
import { useMediaQuery } from '@mui/material';
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

// eslint-disable-next-line react/prop-types
export default function ColorMode({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (
          prevMode === 'light' ? 'dark' : 'light'
        ));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(() => makeTheme(mode), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
