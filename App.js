import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Student from './Student';
import Job from './Job';
import "./styles.css";
import OpportunitiesJob from './OpportunitiesJob';
import Opportunities from './opportunities';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/job" element={<Job />} />
          <Route path="/student" element={<Student />} />
          <Route path="/Opportunities" element={<Opportunities/>}/>
          <Route path="/OpportunitiesJob" element={<OpportunitiesJob/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
