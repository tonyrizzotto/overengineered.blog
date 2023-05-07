// /* global localStorage */
import { useEffect, useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useQuery } from 'graphql-hooks';
import ColorMode from './contexts/colorModeContext';
import AppContainer from './components/AppContainer';
import AppBar from './components/AppBar';
import { useSetEnvVarContext } from './contexts/envVarContext';
import Router from './Routes';
import { ENV_QUERY } from './queries';

const cache = createCache({
  key: 'overengineered-css',
});

/*
  `App` component is for anything used to initialize the application after the
  document has loaded, or been `hydrated`, to the client.
 */
export default function App() {
  const [hydrated, setHydrated] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  const { setEnvVars } = useSetEnvVarContext();
  const { loading, data = { getPublicEnvVars: {} } } = useQuery(ENV_QUERY);

  // After App has mounted, set hydrated to true
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Aside from hydration, we only want to rerender the initial app if the ENV Query has finished.
  useEffect(() => {
    if (!loading) setEnvVars(data.getPublicEnvVars);
  }, [loading]);

  /*
    We only want to mount our app if it has hydrated on the screen.
    For hydration to work correctly in SSR, the HTML must be exactly identical at first render
  */
  if (!hydrated) {
    return null;
  }

  return (
    <CacheProvider value={cache}>
      <ColorMode play={changeTheme} setPlay={setChangeTheme}>
        <CssBaseline enableColorScheme />
        <AppContainer>
          <AppBar />
          <Router hydrated={hydrated} />
        </AppContainer>
      </ColorMode>
    </CacheProvider>
  );
}
