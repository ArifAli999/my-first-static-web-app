import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BoxScore from './components/boxscore';
import UpcomingGames from './components/upcomingGames';
import Header from './components/header';
import TestData from './components/testcomp';
import 'antd/dist/antd.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>

      <Routes>
          
          <Route path="boxscore" element={<BoxScore/>} />
          <Route path="upcomingGames" element={<UpcomingGames/>} />
          <Route path="testcomp" element={<TestData/>} />
          </Routes>



     
       

        
      </div>
 

      </BrowserRouter>





  );
}

export default App;