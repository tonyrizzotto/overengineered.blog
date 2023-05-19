import { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const AuthenticationContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function AuthenticationProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [getAuthCookie] = useCookies(['heytony']);

  useEffect(() => {
    if (getAuthCookie) {
      setIsAuthorized(true);
    }
  }, []);
  return (
    <AuthenticationContext.Provider value={isAuthorized}>
      {children}
    </AuthenticationContext.Provider>
  );
}
