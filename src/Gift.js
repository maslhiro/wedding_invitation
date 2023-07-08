/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import gift from "./assets/gift.png";
import { MyContext } from "./store";

const LINK_QR =
  "https://images.squarespace-cdn.com/content/v1/5d3f241fa4e0350001fa20d5/1636491460338-AIZAXV2978MGIDQE0GT7/qr-code.png?format=300w";
export default function Gift(props) {
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
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <img
        src={gift}
        alt="gift"
        style={{ objectFit: "cover", width: "100%", maxWidth: 520 }}
      />
      <br />
      <div className="txt-letter-05">Gửi lời chúc đến đôi uyên ương</div>
      <br />

      <div
        style={{
          backgroundColor: "#ed43a0",
          border: "1px solid #ed43a0",
          borderRadius: "12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <a
          className="txt-letter-momo"
          target="_blank"
          href={LINK_QR}
          rel="noreferrer"
        >
          Gửi lời chúc qua Momo
        </a>
        <br />

        <a
          className="txt-letter-momo"
          target="_blank"
          href={LINK_QR}
          rel="noreferrer"
        >
          <img src={LINK_QR} alt="qr-code" />
        </a>
        <br />
      </div>

      <br />
      <div className="txt-letter-01">-------------------------------</div>

      <div className="txt-letter-01">Lê Nhựt Vinh</div>
      <div className="txt-letter-01">Vietcombank - 997870226 - niv</div>
      <br />

      <div className="txt-letter-01">-------------------------------</div>
      <br />

      <div className="txt-letter-01">Trần Hồng Hạnh</div>
      <div className="txt-letter-01">Vietcombank - xxxxxxxxx</div>

      <br />
      <div className="txt-letter-01">-------------------------------</div>
    </div>
  );
}
