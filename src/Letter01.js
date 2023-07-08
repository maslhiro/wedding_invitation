import React, { useContext } from "react";
import letter_01 from "./assets/letter_01.png";
import { MyContext } from "./store";
import Letter from "./Letter";

export default function Letter01(props) {
  const { store } = useContext(MyContext);
  const { height } = store || {};

  return (
    <Letter backgroundSrc={letter_01}>
      <div
        style={{
          position: "absolute",
          height,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
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
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        <div
          style={{
            flex: 1,
            display: "flex",
          }}
        />
      </div>
    </Letter>
  );
}
