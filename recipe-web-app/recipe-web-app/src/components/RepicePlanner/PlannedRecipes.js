import React, { useEffect, useContext } from 'react';
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';
import { PlannedRecipesContext } from '../../contexts/PlannedRecipeContext';

const PlannedRecipes = () => {
    const { plannedRecipes, removePlannedRecipe, addPlannedRecipe } = useContext(PlannedRecipesContext);

    // "Initialize" the list of planned recipes.
    useEffect(() => {
        // Retrieve planned recipes from wherever they end up being stored.
        const storedPlannedRecipes = getStoredRecipes();
        for (const recipe in storedPlannedRecipes) {addPlannedRecipe(recipe)};
    }, []);

    // Gets the previously stored recipes from memory.
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

    const saveRecipes = () => {
        return null;
    };

    // Handle navigation to the review screen
    const handleReviewIngredients = () => {
        saveRecipes();
        
    };

    return (
        <div className={'container plannedRecipes'}>
            <h2>Planned Recipes</h2>
            <button onClick={handleReviewIngredients}>Review Ingredients</button>
            <div className="recipeList">
                <ul>
                    {plannedRecipes.map((recipe) => {
                        const listId = uuidv4(); // Generate a unique ID for the recipe card
                        return (
                            <RecipeCard
                                key={recipe.id}
                                listId={listId}
                                recipe={recipe}
                                buttonText={"Remove Recipe"}
                                onClickFunction={() => removePlannedRecipe(recipe.id)} // Use the removePlannedRecipe function from context
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PlannedRecipes;
