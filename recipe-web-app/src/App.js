import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import RecipePlanner from "./components/RecipePlanner";
import HomePage from "./components/HomePage";
import LoginPage from './MyAccount/LoginPage';
import { useState } from 'react';
import Register from './MyAccount/Register';
function App() {

  const [formSwitch, setOnFormSwitch] = useState(true)
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <div className="view">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<NotFound />} />
          <Route path="/cookbooks" element={<NotFound />} />
          <Route path="/plan" element={<RecipePlanner />} />
          <Route path="/myaccout" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
