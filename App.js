import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Footer, Possibility, Features, WhatRA, Header } from "./containers";
import { Navbar, Login, Register,Home, Cr, Profile, Rapython, Pythoncs, Pythonhr} from "./components";
import "./App.css";



const App = () => {
  return (

    <div className="App">
      

      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cr" element={<Cr />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rapython" element={<Rapython />} />
          <Route path="/pythoncs" element={<Pythoncs />} />
          <Route path="/pythonhr" element={<Pythonhr />} />
        </Routes>
      </BrowserRouter>
      

      
      
    </div>
  
  );
};

export default App;
