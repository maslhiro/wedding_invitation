import "./App.css";

import React from "react";
import Cover from "./Cover";
import Letter01 from "./Letter01";
import Letter02 from "./Letter02";

import { MyContextProvider } from "./store";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Cover />
        <Letter01 />
        <Letter02 />
      </div>
    </MyContextProvider>
  );
}

export default App;
