import React from 'react';

const RecipeCard = ({ recipe, onClickFunction, buttonText }) => {
    const placeholderImageUrl = 'https://via.placeholder.com/150'; // Replace with your placeholder image URL

    let imageUrl = placeholderImageUrl;

    if (recipe && recipe.image_data) {
        imageUrl = `data:image/jpeg;base64,${recipe.image_data.replace(/\\x/g, '')}`;
    }

    return (
        <div className="recipeCard">
            <img src={imageUrl} alt={recipe?.name} />
            <h3>{recipe?.description}</h3>
            <button onClick={onClickFunction}>{buttonText}</button>
        </div>
    );
};

export default RecipeCard;
