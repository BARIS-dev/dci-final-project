import PropTypes from "prop-types";
import "./Modal.css";
import ChatRoom from "../ChatRoom/Chatroom";
import { FaX } from "react-icons/fa6";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay animate__animated animate__fadeIn animte__faster">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-left">
            <span className="chat-greet">Hallo</span>
            <p>
              Kundensupport: <span className="on-off-span">online</span>
            </p>
          </div>
          <div className="chat-header-right">
            <a onClick={onClose} className="closeBtn">
              <FaX />
            </a>
          </div>
        </div>
        <div className="chat-content">
          <ChatRoom />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
