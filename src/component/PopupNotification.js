import React from 'react';
import './popUp.css';

function PopupNotification({ message, onClose }) {
  return (
    <div className="popup-notification">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopupNotification;
