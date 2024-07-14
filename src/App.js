import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter import
import './App.css'; // 전역 스타일 import
import Footer from "./components/Footer";

function App() {
  return (
      <Router>

        <div className="App">

          <Navbar/>
          <Main />
        </div>
      </Router>
  );
}

export default App;