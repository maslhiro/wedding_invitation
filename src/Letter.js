import React, { useContext } from "react";
import { SECONDARY_COLOR } from "./assets";
import { MyContext } from "./store";

export default function Letter(props) {
  const { store } = useContext(MyContext);
  const { height } = store || {};
  const { children, backgroundSrc } = props || {};

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        minHeight: height,
        flexDirection: "column",
        backgroundColor: SECONDARY_COLOR,
        maxWidth: 520,
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={backgroundSrc}
        alt="letter_png"
        style={{ maxWidth: 520, width: "100%", objectFit: "cover" }}
      />
      {children}
    </div>
  );
}
