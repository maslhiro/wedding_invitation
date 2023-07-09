/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import contact from "./assets/contact.jpg";
import footer from "./assets/footer.png";
import phone_01 from "./assets/phone_01.png";
import phone_02 from "./assets/phone_02.png";
import { MyContext } from "./store";
import { BACKGROUND_COLOR } from "./assets";

export default function Footer(props) {
  const { store } = useContext(MyContext);

  const { width } = store || {};

  return (
    <div
      style={{
        minWidth: width,
        maxWidth: width,
        width,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <img
        src={contact}
        alt="contact"
        style={{ objectFit: "cover", width: "100%", maxWidth: 520 }}
      />
      <br />
      <div className="txt-letter-05">Thông tin liên hệ</div>
      <br />
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <a
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
          href="tel:0978702268"
        >
          <div className="txt-letter-01">Liên hệ chú rễ</div>
          <br />
          <img
            src={phone_02}
            alt="phone_02"
            style={{ objectFit: "cover", height: 80, width: 80 }}
          />
        </a>
        <a
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
          href="tel:0978702268"
        >
          <div className="txt-letter-01">Liên hệ cô dâu</div>
          <br />
          <img
            src={phone_01}
            alt="phone_01"
            style={{ objectFit: "cover", height: 80, width: 80 }}
          />
        </a>
      </div>
      <br />
      <img
        src={footer}
        alt="footer"
        style={{ objectFit: "cover", width: "100%", maxWidth: 520 }}
      />
    </div>
  );
}
