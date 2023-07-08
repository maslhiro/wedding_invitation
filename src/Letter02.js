import React, { useContext } from "react";
import letter_02 from "./assets/letter_02.png";
import img_01 from "./assets/img_01.png";
import { MyContext } from "./store";
import Letter from "./Letter";

export default function Letter02(props) {
  const { store } = useContext(MyContext);
  const { height } = store || {};

  return (
    <Letter backgroundSrc={letter_02}>
      <div
        style={{
          position: "absolute",
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            // backgroundColor: "red",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <img src={img_01} alt="img_01" style={{ width: "40%" }} />
          <br />
          <div className="txt-letter-01">
            Trân trọng kính mời
            <br />
            QUÝ KHÁCH
          </div>
          <br />
          <div className="txt-letter-01">
            Đến dự buổi tiệc
            <br />
            chung vui cùng gia đình chúng tôi tại
          </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            // backgroundColor: "blue",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div className="txt-letter-02">
            THE GANGS
            <br />
            URBAN
          </div>
          <div className="txt-letter-01">
            212 Đ. Lý Thái Tổ, Phường 1, Quận 3, <br />
            Thành phố Hồ Chí Minh
            <br />
            Vào lúc
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                // backgroundColor: "red",
                alignItems: "center",
                justifyContent: "flex-end",
                borderRight: "2px solid #9b1f21",
              }}
            >
              <div className="txt-letter-01">
                19:00
                <br />
                Thứ Bảy
              </div>
              <span
                style={{
                  margin: 9,
                }}
              />
            </div>

            <div style={{ margin: 10 }}>
              <div className="txt-letter-04">15</div>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                // backgroundColor: "yellow",
                borderLeft: "2px solid #9b1f21",
              }}
            >
              <span
                style={{
                  margin: 9,
                }}
              />
              <div className="txt-letter-01">
                Tháng 7
                <br />
                Năm 2023
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <div className="txt-letter-01">
            Sự hiện diện của Quý Khách
            <br />
            là niềm vinh dự cho gia đình chúng tôi.
          </div>
        </div>
      </div>
    </Letter>
  );
}

// <div className="txt-letter-01">
// Trân trọng kính mời QUÝ KHÁCH Đến dự buổi tiệc chung vui cùng gia đình
// chúng tôi tại
// </div>
// <div className="txt-letter-02">
// VINH &<br />
// HẠNH
// </div>
// <br />
// <div className="txt-letter-03">
// Chúng tôi sẽ làm tiệc báo hỷ
// <br />
// giữa lòng Sài Gòn.
// <br />
// Thời gian: 15.07.2023 | 19:00 <br />
// Địa điểm: The Gangs Urban -<br />
// Lý Thái Tổ
// </div>
// <br />
