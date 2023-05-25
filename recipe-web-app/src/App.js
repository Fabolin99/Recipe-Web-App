import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import RecipePlanner from "./RepicePlanner/RecipePlanner.jsx"

function App() {
  return (
    <div>   
      <NavigationBar />
      <RecipePlanner />
    </div>
  );
}

export default App;
