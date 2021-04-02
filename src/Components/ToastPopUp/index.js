import React, { useState } from "react";
import { Toast, TransitionComponent } from "react-bootstrap";

const ToastPopUp = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "fixed",
        minHeight: "100px",
        bottom: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="mr-auto">😀 Great news!</strong>
        </Toast.Header>
        <Toast.Body>
          We are now offering free delivery within the M25 and free Mac
          valuation within 24 hours!
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastPopUp;
