import React, { useEffect, useContext } from 'react';
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';
import { PlannedRecipesContext } from '../../contexts/PlannedRecipeContext';
import { useNavigate } from 'react-router-dom';

const PlannedRecipes = () => {
    const { plannedRecipes, removePlannedRecipe, loadStoredRecipes } = useContext(PlannedRecipesContext);
    const navigate = useNavigate();

    // "Initialize" the list of planned recipes.
    useEffect(() => {
        // Retrieve planned recipes from wherever they end up being stored.
        loadStoredRecipes();
    }, []);

    // Handle navigation to the review screen
    const handleReviewIngredients = () => {
        navigate("/ingredients")
    };

    return (
        <div className={'planContainer plannedRecipes'}>
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
