import React, { useContext } from "react";
import letter from "./assets/letter.png";
import { SECONDARY_COLOR } from "./assets";
import { MyContext } from "./store";

export default function Letter(props) {
  const { store } = useContext(MyContext);
  const { height } = store || {};

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
        src={letter}
        alt="letter_png"
        style={{ maxWidth: 520, width: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          display: "flex",
          flexDirection: "column",

          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="txt-letter-01">
          NGÀY ĐẶC BIỆT CỦA TÌNH YÊU <br />
          VÀ ĐIỀU KỲ DIỆU
        </div>
        <div className="txt-letter-02">
          VINH &<br />
          HẠNH
        </div>
        <br />
        <div className="txt-letter-03">
          Chúng tôi sẽ làm tiệc báo hỷ
          <br />
          giữa lòng Sài Gòn.
          <br />
          Thời gian: 15.07.2023 | 19:00 <br />
          Địa điểm: The Gangs Urban -<br />
          Lý Thái Tổ
        </div>
      </div>
    </div>
  );
}
