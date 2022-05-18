import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./css/style.css"

import NavBar from './components/NavBar';
import Recipes from './pages/Recipes';
import Planner from './pages/Planner';
import Trips from './pages/Trips';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <div>
            <Routes>
              <Route path="/trips" element={<Trips/>}/>
              <Route path="/planner" element={<Planner/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/" element={<Recipes/>}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
