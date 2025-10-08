import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import RasidsPage from './pages/RasidsPage';
import OneHealthPage from './pages/OneHealthPage';

import CtlAiPage from './pages/CtlAiPage';



function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />}  />   
        <Route path="/rasids/" element={<RasidsPage />}  />   
        <Route path="/one_health/" element={<OneHealthPage />}  />   
        <Route path="/ctl_ai/" element={<CtlAiPage />}  />   



          
      </Routes>
    </Router>
  );
}


export default App