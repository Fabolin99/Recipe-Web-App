import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import RecipePlanner from "./components/RecipePlanner";
import HomePage from "./components/HomePage";
import LoginPage from './MyAccount/LoginPage';
import { useState } from 'react';

function App() {

  const [formSwitch, setOnFormSwitch] = useState(true)
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<NotFound />} />
          <Route path="/cookbooks" element={<NotFound />} />
          <Route path="/plan" element={<RecipePlanner />} />
          <Route path="/myaccount" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
