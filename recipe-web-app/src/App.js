import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import CreateRecipe from "./supabase_practice";

function App() {
  return (
    <div>
      <CreateRecipe />
    </div>
  );
}

export default App;
