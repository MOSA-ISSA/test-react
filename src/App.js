import React from 'react';
import './App.css';
import {RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
// import Home from './routes/pages/Home';
// import User from './routes/pages/User';
// import Settings from './routes/pages/Settings';

function App() {
  // console.log("tset");

  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  );
}

export default App;
