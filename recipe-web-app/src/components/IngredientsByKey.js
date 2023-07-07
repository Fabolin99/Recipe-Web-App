import supabase from "../supabaseConfig";
import React, { useEffect, useState } from "react";
import "./IngredientList/IngredientsByKey.css";


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
        <div className="container">
      <div className="ingredients-box">
      <h1>Ingredients</h1>
      <div className="list-container">
      <ul className="ing-list">
        {ingredientsFromKey.map((ingredient, index) => (
          <li className="list-item"key={index}>
            <input type="checkbox" />
            <span>{ingredient.trim()}</span>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
      );
}

export default IngredientsByKey;


