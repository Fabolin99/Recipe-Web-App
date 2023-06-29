import supabase from "./supabaseConfig";
import React, { useEffect, useState } from "react";
import "./IngredientsByKey.css";


const IngredientsByKey = () => {
    const keys = [1];
    const [ingredientsFromKey, setIngredientsFromKey] = useState([]);

    useEffect (() => {
        const getIngredients = async (keys) => {
            const { data, error } = await supabase
            .from('recipes')
            .select('ingredients')
            .in('id', keys);
        
            if (error) {
                console.error(error);
                return [];
            }
            const ingredientsList = data.map((row) => JSON.parse(row.ingredients));
            setIngredientsFromKey(ingredientsList);
            };
            console.log(ingredientsFromKey);

            getIngredients();
    }, [])
    
    return (
        <div id='ingList'>
          <h2>Recipe Ingredients</h2>
          <ul>
            {ingredientsFromKey.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      );
}

export default IngredientsByKey;


