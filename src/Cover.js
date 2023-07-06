import React, { useEffect, useState } from "react";
import cover from "./assets/cover.gif";

const PRIMARY_COLOR = "#9b1f21";
export default function Cover() {
  const [windowSize, setWindowSize] = useState(window);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { innerHeight: windowHeight } = windowSize || {};

  return (
    <div
      style={{
        height: windowHeight,
        display: "flex",
        flexDirection: "column",
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
        <span style={styles.coverTitle}>NHỰT VINH</span>
        <br />
        <span style={styles.coverTitle}>HỒNG HẠNH</span>
        <br />
        <span style={styles.coverTitle}>15.07.2023</span>
      </div>
      <img src={cover} alt="GIF" style={{ maxWidth: 520, width: "100%" }} />
    </div>
  );
}

const styles = {
  container: {},
  coverTitle: {
    fontFamily: '"Baloo 2", cursive',
    fontWeight: "bold",
    fontSize: "50px",
    lineHeight: "50px",
    color: "#FDD65D",
  },
  imageStyles: {
    objectFit: "cover",
  },
};
