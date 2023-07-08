/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import feedback from "./assets/feedback.png";
import { MyContext } from "./store";

export default function Feedback(props) {
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
        src={feedback}
        alt="feedback"
        style={{ objectFit: "cover", width: "100%", maxWidth: 520 }}
      />
      <br />
      <div className="txt-letter-05">Thông tin phản hồi</div>
      <br />
      <div className="txt-letter-01">
        Để thuận tiện cho việc sắp xếp chỗ ngồi,
        <br />
        vui lòng phản hồi giúp vợ chồng mình nhé!
      </div>

      <div style={{ backgroundColor: "red", height: 100, width: 100 }}>
        cominng sooon ...
      </div>
    </div>
  );
}
