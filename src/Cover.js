/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import cover from "./assets/cover.gif";
import { PRIMARY_COLOR } from "./assets";
import { MyContext } from "./store";

export default function Cover(props) {
  const { store, setStore, _setStore } = useContext(MyContext);
  const refView = useRef(null);

  const { height } = store || {};

  useEffect(() => {
    const handleResize = () => {
      setStore({
        height: window?.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    if (!refView.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          const _width = entry.contentRect?.width;
          if (_width) {
            _setStore((_store) => {
              if (!_width && _store?.width >= _width) {
                return _store;
              }
              return {
                ..._store,
                width: _width,
              };
            });
            break;
          }
        }
      }
    });
    resizeObserver.observe(refView.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: height,
        maxHeight: height,
        height,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
      ref={refView}
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
