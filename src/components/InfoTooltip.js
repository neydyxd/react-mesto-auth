import React from "react";
import closeIcon from "../images/close.png";
function InfoTooltip({ onClose, isOpen}) {
  return (
    <div className={`popup  ${isOpen ? `popup_opened` : ""}`}>
      <div className="popup__container popup__container_success">
        <div
          className={`popup__success`}
        ></div>
        <h2 className="popup__title">
        Вы успешно зарегистрировались!
        </h2>
        <button type="button" className="popup__close" onClick={onClose}>
          <img
            src={closeIcon}
            alt="закрывающий крестик"
            className="popup__close-image"
          />
        </button>
      </div>
    </div>
  );
}
export default InfoTooltip;