import React from 'react';
import './User.css'; // Import your CSS file
import { Link, useLocation, useNavigate } from 'react-router-dom';

function User() {

  const navigate = useNavigate();

  const {state} = useLocation();

  return (
    <div className="container">
      <header className="header">
        <h1>User Page</h1>
      </header>
      <div className="user-info">
        <img
          src={require("../../assets/Images/user.png")} /* Add the path to your user's avatar image */
          alt="avatar"
          cen
          className="avatar"
        />
        <div className="user-details">
          <h2>User Name</h2>
          <p>Email: user@example.com</p>
        </div>
      </div>

      <button
       className="custom-button"
       onClick={() => navigate(-1)}>go back
      </button>

      <h1>from {state.param}</h1>

    </div>
  );
}

export default User;
