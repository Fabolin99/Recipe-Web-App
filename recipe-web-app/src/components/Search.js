import React, { useState } from 'react';
import './SearchBar.css';
import { supabase } from './supabaseConfig';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleChange = async (event) => {
        const value = event.target.value;
        setSearchText(value);
        setActiveSuggestion(0);

        if (value.length === 0) {
            setSelectedRecipe(null);
        }

        if (value.length > 0) {
            const { data: recipes, error } = await supabase
              .from('recipes')
              .select('*')
              .ilike('description', `${value}%`);
            if (error) {
              console.log('Error: ', error);
            } else {
              setSuggestions(recipes);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleClick = recipe => {
        setSearchText(recipe.description);
        setSelectedRecipe(recipe);
        setSuggestions([]);
    };

    const handleKeyDown = event => {
        if (event.keyCode === 38) { // up arrow
            setActiveSuggestion(activeSuggestion === 0 ? suggestions.length - 1 : activeSuggestion - 1);
        }
        else if (event.keyCode === 40) { // down arrow
            setActiveSuggestion(activeSuggestion === suggestions.length - 1 ? 0 : activeSuggestion + 1);
        }
        else if (event.keyCode === 13) { // enter key
            setSearchText(suggestions[activeSuggestion].description);
            setSelectedRecipe(suggestions[activeSuggestion]);
            setSuggestions([]);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Recipe Search</h1>
            <input 
                className="search-bar"
                type="text"
                value={searchText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search for recipes..."
            />
            {suggestions && suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((recipe, index) => (
                        <li 
                            key={recipe.id} 
                            onClick={() => handleClick(recipe)}
                            className={index === activeSuggestion ? "active" : ""}
                        >
                            {recipe.description}
                        </li>
                    ))}
                </ul>
            )}

            {selectedRecipe && (
                <div className="recipe-box">
                    <h2>{selectedRecipe.description}</h2>
                    <img src={selectedRecipe.image_data} alt={selectedRecipe.description}/>
                    <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
