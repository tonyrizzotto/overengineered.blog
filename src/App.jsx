// /* global localStorage */
import { useEffect, useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useManualQuery } from 'graphql-hooks';
import { CookiesProvider } from 'react-cookie';
import AuthenticationProvider from './auth';
import ColorMode from './contexts/colorModeContext';
import FunContextProvider from './contexts/funContext';
import AppContainer from './components/AppContainer';
import AppFooter from './components/AppFooter';
import { useSetEnvVarContext } from './contexts/envVarContext';
import Router from '@/routes/index.jsx';
import { ENV_QUERY } from './queries';

const cache = createCache({
  key: 'so-over-css',
});

/*
  `App` component is for anything used to initialize the application after the
  document has loaded, or been `hydrated`, to the client.
 */
export default function App() {
  const [hydrated, setHydrated] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  const { setEnvVars } = useSetEnvVarContext();
  const [queryEnvVars] = useManualQuery(ENV_QUERY);

  const handleSetEnvVars = async () => {
    const data = await queryEnvVars();
    setEnvVars(data.getPublicEnvVars);
  };

  // After App has mounted, set hydrated to true
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Aside from hydration, we only want to rerender the initial app if the ENV Query has finished.
  useEffect(() => {
    if (hydrated) {
      handleSetEnvVars();
    }
  }, [hydrated]);

  /*
    We only want to mount our app if it has hydrated on the screen.
    For hydration to work correctly in SSR, the HTML must be exactly identical at first render
  */
  if (!hydrated) {
    return null;
  }
  return (
    <BrowserRouter>
      <CacheProvider value={cache}>
        <ColorMode play={changeTheme} setPlay={setChangeTheme}>
          <FunContextProvider>
            <CssBaseline enableColorScheme />
            <CookiesProvider>
              {/* TODO: Suspense needs to be configured with a fallback */}
              {/* https://react.dev/reference/react/Suspense */}
              <Suspense>
                <AuthenticationProvider>
                  <AppContainer>
                    <Router hydrated={hydrated} />
                    <AppFooter />
                  </AppContainer>
                </AuthenticationProvider>
              </Suspense>
            </CookiesProvider>
          </FunContextProvider>
        </ColorMode>
      </CacheProvider>
    </BrowserRouter>
  );
}
