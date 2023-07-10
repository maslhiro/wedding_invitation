/* eslint-disable jsx-a11y/iframe-has-title */
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
          <div className="txt-letter-01">Liên hệ chú rể</div>
          <br />
          <img src={phone_02} alt="phone_02" className="icon-phone" />
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
          href="tel:0967381931"
        >
          <div className="txt-letter-01">Liên hệ cô dâu</div>
          <br />
          <img src={phone_01} alt="phone_01" className="icon-phone" />
        </a>
      </div>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.311747040932!2d106.6774514!3d10.7669753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff3ab69ca55%3A0xc490f506454c80d1!2sThe%20Gangs%20Urban!5e0!3m2!1svi!2s!4v1689005999986!5m2!1svi!2s"
        style={{ border: "0px", alignSelf: "center" }}
        height={(width * 80) / 100}
        width={(width * 80) / 100}
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />

      <br />
      <img
        src={footer}
        alt="footer"
        style={{ objectFit: "cover", width: "100%", maxWidth: 520 }}
      />
    </div>
  );
}
