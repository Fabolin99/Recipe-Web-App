import React, { useState, useEffect } from "react";
import styles from "./HomePage/HomePage.css";

const getRandomRecipe = () => {};
const HomePage = () => {
  return (
    <div className="recipeContainer">
      <div className="randomRecipe">
        <h1>Discover a New Recipe</h1>
        <h2>Recipe Name</h2>
        <p id="description">Description</p>
        <p id="ingredients">Ingredients</p>
        <p id="instructions">Instructions</p>
      </div>
    </div>
  );
};
export default HomePage;
