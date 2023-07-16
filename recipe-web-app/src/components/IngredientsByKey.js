import supabase from "../supabaseConfig";
import React, { useEffect, useState } from "react";
import "./IngredientList/IngredientsByKey.css";


//Takes ana array of keys from the Recipe Planner component and then outputs the ingredients based on the key given
function IngredientsByKey(props) {
    //const keys = [13,14,15,16,17];
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
        const storedRecipes = localStorage.getItem('recipes');
        var parsedRecipes = null;

        // If there are no stored recipes, return an empty array
        if (!storedRecipes) {
            return;
        }

        // Parse the stored recipes from JSON format
        try {
            parsedRecipes =  JSON.parse(storedRecipes);
        } catch (error) {
            console.error('Error parsing stored recipes:', error);
            return;
        }
        
        const keys = parsedRecipes.map(recipe => parseInt(recipe.id, 10));


        getIngredients(keys);
    }, []);
        

    return (
        <div className="ingredientsContainer">
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
