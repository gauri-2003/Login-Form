import React from "react";
import {useState} from "react";
import Signup from "./Signup";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from "./login";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
