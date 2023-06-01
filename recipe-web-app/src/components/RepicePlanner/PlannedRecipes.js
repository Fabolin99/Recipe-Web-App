import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import styles from "./styles.css";
import { v4 as uuidv4 } from 'uuid';

const PlannedRecipes = () => {
    const [plannedRecipes, setPlannedRecipes] = useState([]);

    // "Initialize" the list of planned recipes.
    useEffect(() => {
        // Retrieve planned recipes from wherever they end up being stored.
        const storedPlannedRecipes = getStoredRecipes();
        setPlannedRecipes(storedPlannedRecipes);
    }, []);

    /**
     * Get Stored Recipes
     * @returns storedPlannedRecipes - A list of all previously stored planned recipes.
     */
    const getStoredRecipes = () => {
        // Get the stored recipes from wherever they end up being stored.
        return [
            { id: 1, name: 'Recipe 1', description: 'Recipe 1 description', image: 'http://via.placeholder.com/60' },
            { id: 2, name: 'Recipe 2', description: 'Recipe 2 description', image: 'http://via.placeholder.com/60' },
            { id: 3, name: 'Recipe 3', description: 'Recipe 3 description', image: 'http://via.placeholder.com/60' },
            { id: 4, name: 'Recipe 4', description: 'Recipe 4 description', image: 'http://via.placeholder.com/60' },
            { id: 5, name: 'Recipe 5', description: 'Recipe 5 description', image: 'http://via.placeholder.com/60' },
        ]; // Temporary List of Recipes
    };

    /**
     * Save Recipes
     * @description Saves the current recipes to wherever they are saved.
     */
    const saveRecipes = () => {
        return null
    }

    // Handle navigation to the review screen
    const handleReviewIngredients = () => {
        saveRecipes()
        return null
    };

    /**
     * Handle Remove Recipe
     * @description Filters the recipe currently being removed from the list.
     * @param { int } recipeId The id of the recipe being removed
     */
    const handleRemoveRecipe = (recipeId) => {
        setPlannedRecipes((prevRecipes) =>
            prevRecipes.filter((recipe) => recipe.id !== recipeId)
        );
    };


    return (
        <div className={["container", "plannedRecipes"]}>
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
                                function={() => handleRemoveRecipe(recipe.id)}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PlannedRecipes;