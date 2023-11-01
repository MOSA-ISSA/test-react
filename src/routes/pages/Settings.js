import React, { useState } from 'react';
import './Settings.css'; // Import your CSS file
import PopupNotification from '../../component/PopupNotification';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Settings() {

  const navigate = useNavigate();


    const [showPopup, setShowPopup] = useState(false);
  
  const handleNotificationClick = () => {
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="settings-container">
      <header className="header">
        <h1>Settings Page</h1>
      </header>
        <button
          className="custom-button"
          onClick={() => navigate(-1)}>go back
        </button>
      <div className="button-container">
        <button className="button" onClick={handleNotificationClick}>
            notification</button>
        <button className="button">Show children</button>
        <button className="button">Notifications</button>
        <button className="button">Account Settings</button>
        <button className="button">
          <Link 
            to={`User/${1}`}
            state={{ param: 'settings' }}
          >
            {'User'}
          </Link>
        </button>
        
      </div>

      {showPopup && (
        <PopupNotification
          message="This is a pop-up notification"
          onClose={handleClosePopup}
        />
      )}

      <div id="detail">
        <Outlet  />
      </div>

    </div>
  );
}

export default Settings;
