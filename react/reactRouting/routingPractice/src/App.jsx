import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:request" element={<Display/>}/>
          <Route path="/:request/:color/:backgroundColor" element={<Display/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
