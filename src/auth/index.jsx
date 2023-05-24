import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useCookies } from 'react-cookie';

const AuthenticationContext = createContext({});

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (typeof context === 'undefined') {
    throw new Error('useAuthentication must be used within AuthenticationContext.Provider.');
  }

  const isAuthenticated = context;
  return { isAuthenticated };
}
// eslint-disable-next-line react/prop-types
export default function AuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [getAuthCookie] = useCookies(['heytony']);

  useEffect(() => {
    if (getAuthCookie.heytony) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <AuthenticationContext.Provider value={isAuthenticated}>
      {children}
    </AuthenticationContext.Provider>
  );
}
