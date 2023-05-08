import {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const FunContext = createContext();

export function useFunContext() {
  const context = useContext(FunContext);
  if (typeof context === 'undefined') {
    throw new Error('useFunContext must be used within FunContext.Provider.');
  }

  const { fun, setFun } = context;
  return { fun, setFun };
}

// eslint-disable-next-line react/prop-types
export default function FunContextProvider({ children }) {
  const [fun, setFun] = useState(false);

  const context = useMemo(() => ({ fun, setFun }), [fun]);

  return (
    <FunContext.Provider value={context}>
      {children}
    </FunContext.Provider>
  );
}
