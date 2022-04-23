import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Planner from './pages/Planner';
import Trips from './pages/Trips';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="Page">
            <Routes>
              <Route path="/recipes" element={<Recipes/>}/>
              <Route path="/trips" element={<Trips/>}/>
              <Route path="/planner" element={<Planner/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
