import supabase from "./supabaseConfig";
import React, { useEffect, useState } from "react";
import "./IngredientsByKey.css";


const IngredientsByKey = () => {
    const keys = [8,9,10];
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
    
          const ingredientsList = data.flatMap((row) => row.ingredients.split(","));
          setIngredientsFromKey(ingredientsList);
        };
    
    useEffect(() => {
        getIngredients(keys);
    }, []);
        

    return (
        <div id="ingList">
      <h1>Ingredients</h1>
      <ul>
        {ingredientsFromKey.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
      );
}

export default IngredientsByKey;


