/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useRef } from "react";
import cover from "./assets/cover.gif";
import { PRIMARY_COLOR } from "./assets";
import { MyContext } from "./store";

export default function Cover(props) {
  const { store, setStore } = useContext(MyContext);
  const refView = useRef(null);

  const { height } = store || {};

  const handleResize = useCallback(() => {
    setStore({
      height: window?.innerHeight,
      width: refView.current.offsetWidth,
    });
  }, [refView?.current]);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setStore({
      width: refView.current.offsetWidth,
    });
  }, [refView?.current]);

  return (
    <div
      ref={refView}
      style={{
        minHeight: height,
        maxHeight: height,
        height,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: PRIMARY_COLOR,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span className="title-cover">NHỰT VINH</span>
        <br />
        <span className="title-cover">HỒNG HẠNH</span>
        <br />
        <span className="title-cover">15.07.2023</span>
      </div>
      <div style={{ backgroundColor: PRIMARY_COLOR }}>
        <img src={cover} alt="GIF" style={{ maxWidth: 520, width: "100%" }} />
      </div>
    </div>
  );
}
