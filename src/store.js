import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [store, _setStore] = useState({ height: window.innerHeight, width: 0 });

  const setStore = (data) =>
    _setStore((store) => ({
      ...store,
      ...data,
    }));

  return (
    <MyContext.Provider value={{ store, setStore }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
