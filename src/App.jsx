import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
// import HomeH18 from './pages/Hall18/HomeH18';






// hall 18
import Home18 from './pages/Hall18/Home18';
import RasidsPage18 from './pages/Hall18/RasidsPage18';
import CtlAiPage18 from './pages/Hall18/CtlAiPage18';
import OneHealthPage18 from './pages/Hall18/OneHealthPage18';

// hall 6
import Home6 from './pages/Hall6/Home6';
import RasidsPage6 from './pages/Hall6/RasidsPage6';
import CtlAiPage6 from './pages/Hall6/CtlAiPage6';
import Global6 from './pages/Hall6/Global6';

import OneHealthPage6 from './pages/Hall6/OneHealthPage6';



function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />}  />   
       
          {/* hall6 */}
            <Route path="/home6/" element={<Home6/>}  />  
            <Route path="/ctl_ai6/" element={<CtlAiPage6 />}  />
            <Route path="/rasids6/" element={<RasidsPage6 />}  />  
            <Route path="/one_health6/" element={<OneHealthPage6 />}  />   
            <Route path="/global6/" element={<Global6 />}  />               
          {/* hall 18 */}
            <Route path="/rasids18/" element={<RasidsPage18 />}  />  
            <Route path="/home18/" element={<Home18 />}  />   
            <Route path="/ctl_ai18/" element={<CtlAiPage18 />}  />   
            <Route path="/one_health18/" element={<OneHealthPage18 />}  />   
      </Routes>
    </Router>
  );
}


export default App