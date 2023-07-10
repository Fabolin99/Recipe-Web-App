import './styles.css';
import React from 'react';

const RecipeCard = ({ recipe, onClickFunction, buttonText }) => {
    return (
        <div className="recipeCard">
            <img src={recipe?.image} alt={recipe?.name} />
            <h3>{recipe?.name}</h3>
            <p>{recipe?.description}</p>
            <button onClick={onClickFunction}>{buttonText}</button>
        </div>
    );
};

export default RecipeCard;