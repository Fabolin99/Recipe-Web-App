import supabase from "./supabaseConfig";
import React, { useEffect, useState } from "react";
import "./IngredientsByKey.css";


const IngredientsByKey = () => {
    const keys = [1,2,3];
    const [ingredientsFromKey, setIngredientsFromKey] = useState([]);

    const getIngredients = async (keys) => {
        const { data, error } = await supabase
            .from('recipes')
            .select('ingredients')
            .in('id', keys);
    
          if (error) {
            console.error(error);
            return;
          }
    
          const ingredientsList = data.map((row) => row.ingredients);
          setIngredientsFromKey(ingredientsList);
        };
        getIngredients(keys);

    return (
        <div id="ingList">
      <h2>Recipe Ingredients</h2>
      <button useEffect></button>
      <ul>
        {ingredientsFromKey.map((ingredients, index) => (
          <li key={index}>
            {ingredients.map((ingredient, innerIndex) => (
              <div key={innerIndex}>{ingredient.trim()}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
      );
}

export default IngredientsByKey;


