import "./InfoTooltip.css";
import icoSuccess from "../../images/ico-success.svg";
import icoError from "../../images/ico-error.svg";

function InfoTooltip({
  isOpen,
  isSuccess,
  onClose,
  errorMessage,
  successMessage,
}) {
  return (
    <div
      className={`popup popup_type_info-tooltip ${
        isOpen ? " popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <div className="info-tooltip__container">
          <img
            className="info-tooltip__ico"
            src={isSuccess ? icoSuccess : icoError}
            alt={isSuccess ? "Успех" : "Ошибка"}
          />
          <p className="info-tooltip__desc">
            {isSuccess ? successMessage : errorMessage}
          </p>
          <button
            onClick={onClose}
            type="button"
            aria-label="Закрыть"
            className="popup__close link"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
