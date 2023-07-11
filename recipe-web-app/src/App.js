import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import RecipePlanner from "./components/RecipePlanner";
import HomePage from "./components/HomePage";
import LoginPage from './MyAccount/LoginPage';
import Success from "./MyAccount/Success";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <div className="view">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<NotFound />} />
          <Route path="/plan" element={<RecipePlanner />} />
          <Route path="/myaccount" element={<LoginPage />} />
          <Route path="/Success" element={<Success/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
