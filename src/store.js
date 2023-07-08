import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [store, _setStore] = useState({
    height: window.innerHeight,
    width: 0,
    isLoading: true,
  });

  const setStore = (data) =>
    _setStore((store) => ({
      ...store,
      ...data,
    }));

  useEffect(() => {
    setTimeout(() => {
      setStore({ isLoading: false });
    }, 500);
  }, []);

  return (
    <MyContext.Provider value={{ store, setStore, _setStore }}>
      {!store?.isLoading ? (
        children
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1e0cd",
            flexDirection: "column",
          }}
        >
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="title-loading">Chờ 1 xíuuuu ...</div>
        </div>
      )}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
