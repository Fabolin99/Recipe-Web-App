import React, { createContext, useState } from 'react';

// Create the context
export const PlannedRecipesContext = createContext();

// Create a provider component
export const PlannedRecipesProvider = ({ children }) => {
    const [plannedRecipes, setPlannedRecipes] = useState([]);

    // Add a recipe to the planned recipes list
    const addPlannedRecipe = (recipe) => {
        const updatedRecipes = [...plannedRecipes, recipe];
        setPlannedRecipes(updatedRecipes);
        saveRecipesToLocalStorage(updatedRecipes);
    };

    // Remove a recipe from the planned recipes list
    const removePlannedRecipe = (recipeId) => {
        const updatedRecipes = plannedRecipes.filter((recipe) => recipe.id !== recipeId);
        setPlannedRecipes(updatedRecipes);
        saveRecipesToLocalStorage(updatedRecipes);
    };
    
    // Save the recipes to local storage
    const saveRecipesToLocalStorage = (recipes) => {
        try {
            localStorage.setItem('recipes', JSON.stringify(recipes));
        } catch (error) {
            console.error('Error saving recipes to local storage:', error);
        }
    };

    const getStoredRecipes = () => {
        // Check if stored recipes exist in local storage
        const storedRecipes = localStorage.getItem('recipes');

        // If there are no stored recipes, return an empty array
        if (!storedRecipes) {
            return [];
        }

        // Parse the stored recipes from JSON format
        try {
            const parsedRecipes = JSON.parse(storedRecipes);

            // Return the parsed recipes array
            return parsedRecipes;
        } catch (error) {
            console.error('Error parsing stored recipes:', error);
            return [];
        }
    };

    const loadStoredRecipes = () => {
        const storedPlannedRecipes = getStoredRecipes();
        setPlannedRecipes([...storedPlannedRecipes]);
    }

    return (
        <PlannedRecipesContext.Provider
            value={{ plannedRecipes, addPlannedRecipe, removePlannedRecipe, loadStoredRecipes }}
        >
            {children}
        </PlannedRecipesContext.Provider>
    );
};
