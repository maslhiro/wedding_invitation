/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import gift from "./assets/gift.png";
import qr from "./assets/qr.jpg";
import { MyContext } from "./store";
import { BACKGROUND_COLOR } from "./assets";

const LINK_RECEIVE_MONEY = "https://me.momo.vn/nhutvinh";

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
        backgroundColor: BACKGROUND_COLOR,

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
          href={LINK_RECEIVE_MONEY}
          rel="noreferrer"
        >
          Nhấn vào đây
          <br />
          để gửi lời chúc qua Momo
        </a>
        <br />
        <a
          className="txt-letter-momo"
          target="_blank"
          href={LINK_RECEIVE_MONEY}
          rel="noreferrer"
        >
          <img
            src={qr}
            alt="qr-code"
            style={{ objectFit: "cover", width: "70%" }}
          />
        </a>
        <br />
      </div>

      <br />
      <div className="txt-letter-01">-------------------------------</div>

      <div className="txt-letter-01">Lê Nhựt Vinh</div>
      <div className="txt-letter-01">Vietcombank - 9978702268</div>
      <br />

      <div className="txt-letter-01">-------------------------------</div>
      <br />

      <div className="txt-letter-01">Trần Hồng Hạnh</div>
      <div className="txt-letter-01">Vietcombank - 0381000547691</div>

      <br />
      <div className="txt-letter-01">-------------------------------</div>
    </div>
  );
}
