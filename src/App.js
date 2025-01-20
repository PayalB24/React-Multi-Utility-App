import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextFrom';
import Counter from './Component/Counter';
import Darkmode from './Component/Darkmode';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  const setcolor = () => {
    document.body.style.backgroundColor = '#261447';
    document.body.style.color = 'white';
  };

  const setcolor2 = () => {
    document.body.style.backgroundColor = '#3B2F45';
    document.body.style.color = 'white';
  };

  const setcolor3 = () => {
    document.body.style.backgroundColor = '#2B3A2A';
    document.body.style.color = 'white';
  };

  return (
    <Router> 
      <Navbar title="TextUtils" about="About us" mode={mode} togglemode={togglemode} setcolor={setcolor} setcolor2={setcolor2} setcolor3={setcolor3} 
      />
      <Routes>
        <Route path="/Darkmode" element={<Darkmode />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/" element={<TextForm heading="Enter the text to analyse : " />} />
      </Routes>
    </Router>
  );
}

export default App;
