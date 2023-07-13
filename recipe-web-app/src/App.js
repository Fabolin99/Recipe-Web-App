import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import RecipePlanner from "./components/RecipePlanner";
import LoginPage from './MyAccount/LoginPage';
import Success from "./MyAccount/Success";
import IngredientsByKey from "./components/IngredientsByKey"

import RecipeCreation from "./components/RecipeCreation";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <div className="view">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/create" element={<RecipeCreation />} />
          <Route path="/plan" element={<RecipePlanner />} />
          <Route path="/myaccount" element={<LoginPage />} />
          <Route path="/Success" element={<Success/>} />
          <Route path="/ingredients" element={<IngredientsByKey />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
