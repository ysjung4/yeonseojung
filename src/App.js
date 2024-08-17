import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import CV from './components/CV'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // BrowserRouter import
import './App.css';
import About from "./components/About"; // 전역 스타일 import

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              {/*/!* CV 페이지 라우팅 *!/*/}
              {/*<Route path="/cv" element={<CV />} /> /!* DownloadLink 라우트 추가 *!/*/}
          </Routes>
      </Router>
  );
}

export default App;