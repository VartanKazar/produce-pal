import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id="Page">
        <BrowserRouter>
          <Routes>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
