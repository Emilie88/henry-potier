import { createContext,useState } from 'react'

export const Context = createContext(null);
export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
  );
};
