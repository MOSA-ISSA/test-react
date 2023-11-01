import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const pageName='home'
  return (
    <div className="Home-container">
      <header className="header">
        <h1>Simple Header</h1>
      </header>
      <div className="button-container">
        <Link 
          className="custom-button"
          to={"User"}
          state={{ param: pageName }}
        >
          to User
        </Link>
        <Link 
          className="custom-button"
          to={"Settings"}
        >
          to Settings
        </Link>
        
      </div>
    </div>
  )
}
