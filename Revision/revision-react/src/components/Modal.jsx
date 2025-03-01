import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button onClick={onClose} style={closeButtonStyles}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") // Render outside #root
  );
};

// Styles for modal
const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyles = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  position: "relative",
};

const closeButtonStyles = {
  position: "absolute",
  top: "5px",
  right: "10px",
  background: "red",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default Modal;
