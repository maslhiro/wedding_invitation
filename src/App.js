import "./App.css";
import { Analytics } from "@vercel/analytics/react";

import React from "react";
import Cover from "./Cover";
import Letter01 from "./Letter01";
import Letter02 from "./Letter02";

import { MyContextProvider } from "./store";
import Feedback from "./Feedback";
import Gift from "./Gift";
import Footer from "./Footer";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Cover />
        <Letter01 />
        <Letter02 />
        <Feedback />
        <Gift />
        <Footer />
      </div>
      <Analytics />
    </MyContextProvider>
  );
}

export default App;
