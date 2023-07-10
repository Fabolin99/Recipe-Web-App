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
import { createClient } from '@supabase/supabase-js';
import Myprofile from "./MyAccount/MyProfile";


const supabaseUrl = 'https://ixfirovbkskvyhrltteh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Zmlyb3Zia3Nrdnlocmx0dGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDQzMDMsImV4cCI6MjAwMDYyMDMwM30.e-9p8pkQ7T5FnXai60BydhcREf1O-Ga3h0VTZzCCUPY";
const supabase = createClient(supabaseUrl, supabaseKey);


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
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/MyProfile" element={<Myprofile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
