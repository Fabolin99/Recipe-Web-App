import './styles.css';
import React from 'react';

/**
 * Recipe Card
 * @description A card that displays the image, name, and description of a recipe.
 * @param { object } recipe A dictionary containing all information related to the recipe.
 */
const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipeCard">
            <img src={recipe?.image} alt={recipe?.name} />
            <h3>{recipe?.name}</h3>
            <p>{recipe?.description}</p>
            <button> 
                {/* Icon or button for moving recipe in/out of planned recipes */}
            </button>
        </div>
    );
};

export default RecipeCard;