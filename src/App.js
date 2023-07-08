import React, { useContext, useEffect, useState } from "react";
import Cover from "./Cover";

import "./App.css";
import Letter from "./Letter";
import { MyContext, MyContextProvider } from "./store";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Cover />
        <Letter />
      </div>{" "}
    </MyContextProvider>
  );
}

export default App;
