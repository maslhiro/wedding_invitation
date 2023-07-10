/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import feedback from "./assets/feedback.png";
import { MyContext } from "./store";

import va from "@vercel/analytics";

import {
  BACKGROUND_COLOR,
  TEXT_COLOR_SECONDARY,
  bride_ic,
  groom_ic,
} from "./assets";

const COMP = {
  MOMO: "momo",
  SGS: "sgs",
};

const STATUS = {
  CONFIRM: "confirm",
  DISMISS: "dismiss",
  CONFUSED: "confused",
};

export default function Feedback(props) {
  const { store } = useContext(MyContext);

  const [status, setStatus] = useState(STATUS.CONFIRM);
  const [comp, setComp] = useState(COMP.MOMO);
  const [name, setName] = useState("");
  const [num, setNum] = useState(1);
  const [submited, setSubmited] = useState(false);

  const { width } = store || {};

  const onOptionModeChange = (e) => {
    setStatus(e.target.value);
  };

  const onOptionChange = (e) => {
    setComp(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNumChange = (e) => {
    setNum(e.target.value);
  };

  const onSubmit = () => {
    va.track("Invations", {
      name,
      comp,
      status,
      num,
      txt: `${name}-${comp}-${status}-${num}`,
    });
    setSubmited(true);
  };

  if (submited) {
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
          alignItems: "center",
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
        <img
          src={"https://img.icons8.com/color/48/confetti.png"}
          alt="Option 2"
          className="icon-image"
        />
        <br />

        <div className="txt-letter-01">Cảm ơn bạn đã phản hồi.</div>
        <br />
      </div>
    );
  }

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
      <br />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1, display: "flex" }} />
        <label
          style={{
            flex: 2,
            display: "flex",
          }}
        >
          <input
            type="radio"
            name={COMP.MOMO}
            value={COMP.MOMO}
            checked={comp === COMP.MOMO}
            onChange={onOptionChange}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              //   height: 100,
              backgroundColor: "white",
              flexDirection: "column",

              borderRadius: 12,
              padding: 12,
              border:
                comp === COMP.MOMO
                  ? `2px solid ${TEXT_COLOR_SECONDARY}`
                  : `2px solid ${BACKGROUND_COLOR}`,
            }}
          >
            <img src={groom_ic} alt="Option 1" className="icon-image" />
            <br />
            <div className="txt-letter-01">Khách nhà trai</div>
          </div>
        </label>
        <div style={{ flex: 1, display: "flex" }} />

        <label
          style={{
            flex: 2,
            display: "flex",
          }}
        >
          <input
            type="radio"
            name={COMP.SGS}
            value={COMP.SGS}
            checked={comp === COMP.SGS}
            onChange={onOptionChange}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              //   height: 100,
              backgroundColor: "white",
              flexDirection: "column",

              borderRadius: 12,
              padding: 12,

              border:
                comp === COMP.SGS
                  ? `2px solid ${TEXT_COLOR_SECONDARY}`
                  : `2px solid ${BACKGROUND_COLOR}`,
            }}
          >
            <img src={bride_ic} alt="Option 2" className="icon-image" />
            <br />
            <div className="txt-letter-01">Khách nhà gái</div>
          </div>
        </label>
        <div style={{ flex: 1, display: "flex" }} />
      </div>
      <br />
      <div className="txt-letter-01">Tên Khách Mời</div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="name"
          required=""
          onChange={onNameChange}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 12,
        }}
      >
        <label
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <input
            type="radio"
            name={STATUS.CONFIRM}
            value={STATUS.CONFIRM}
            checked={status === STATUS.CONFIRM}
            onChange={onOptionModeChange}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              //   height: 100,
              backgroundColor: "white",
              flexDirection: "column",

              borderRadius: 12,
              padding: 12,
              border:
                status === STATUS.CONFIRM
                  ? `2px solid ${TEXT_COLOR_SECONDARY}`
                  : `2px solid white`,
            }}
          >
            <img
              src={"https://img.icons8.com/color/48/in-love--v1.png"}
              alt="Option 3"
              className="icon-image"
            />
            <br />
            <div className="txt-letter-01">Tham dự</div>
          </div>
        </label>
        <label
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <input
            type="radio"
            name={STATUS.CONFUSED}
            value={STATUS.CONFUSED}
            checked={status === STATUS.CONFUSED}
            onChange={onOptionModeChange}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              //   height: 100,
              backgroundColor: "white",
              flexDirection: "column",

              borderRadius: 12,
              padding: 12,
              border:
                status === STATUS.CONFUSED
                  ? `2px solid ${TEXT_COLOR_SECONDARY}`
                  : `2px solid white`,
            }}
          >
            <img
              src={"https://img.icons8.com/color/48/confused--v1.png"}
              alt="Option 4"
              className="icon-image"
            />
            <br />
            <div className="txt-letter-01">Có thể</div>
          </div>
        </label>

        <label
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <input
            type="radio"
            name={STATUS.DISMISS}
            value={STATUS.DISMISS}
            checked={status === STATUS.DISMISS}
            onChange={onOptionModeChange}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              //   height: 100,
              backgroundColor: "white",
              flexDirection: "column",

              borderRadius: 12,
              padding: 12,
              border:
                status === STATUS.DISMISS
                  ? `2px solid ${TEXT_COLOR_SECONDARY}`
                  : `2px solid white`,
            }}
          >
            <img
              src={"https://img.icons8.com/color/48/sad--v1.png"}
              alt="Option 5"
              className="icon-image"
            />
            <br />
            <div className="txt-letter-01">Rất tiếc</div>
          </div>
        </label>
      </div>
      <br />

      {status !== STATUS.DISMISS && (
        <>
          <div>
            <div className="txt-letter-01">Số Người Tham Dự</div>
            <br />
            <div className="form__group">
              <input
                type="number"
                className="form__input"
                id="name"
                required=""
                onChange={onNumChange}
                defaultValue={1}
                min="1"
                max="5"
              />
            </div>
          </div>
          <br />
        </>
      )}

      <button className="button-3" onClick={onSubmit} disabled={!name}>
        Gửi phản hồi
      </button>

      <br />
    </div>
  );
}
