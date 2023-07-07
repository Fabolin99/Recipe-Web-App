import styles from "./styles.css"
import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

/**
 * RecipeSearch
 * @description Search for recipes and displays them in a list.
 */
const RecipeSearch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        handleSearch();
    }, [])

    /**
     * Handle Search
     * @description Searches for recipes meeting search terms and sets recipes arrays to match.
     */
    const handleSearch = () => {
        // This will eventually equal whatever the search returns.
        const searchResults = [
            { id: 1, name: 'Recipe 1', description: 'Recipe 1 description', image: 'http://via.placeholder.com/60' },
            { id: 2, name: 'Recipe 2', description: 'Recipe 2 description', image: 'http://via.placeholder.com/60' },
            { id: 3, name: 'Recipe 3', description: 'Recipe 3 description', image: 'http://via.placeholder.com/60' },
            { id: 4, name: 'Recipe 4', description: 'Recipe 4 description', image: 'http://via.placeholder.com/60' },
            { id: 5, name: 'Recipe 5', description: 'Recipe 5 description', image: 'http://via.placeholder.com/60' },
        ]; // Temporary list of recipes
        setRecipes(searchResults);
    };

    const search = (e) => {
        setSearchTerm(e.target.value);
        handleSearch();
    }

    return (
        <div className={["container", "recipeSearch"]}>
            <h2>Recipes</h2>
            <div className="searchContainer">
                <input
                    className="searchBar"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                            search(e);
                        }}
                    placeholder="Search recipes" 
                />
                <button onClick={handleSearch}>
                    <i className="filter-icon"></i> {/* Replace with filter icon */}
                </button>
            </div>
            <div className="recipeList">
                <ul>
                    {recipes.map((recipe) => (
                        <RecipeCard 
                            key={recipe.id} 
                            recipe={recipe} 
                        />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default RecipeSearch;