import React, { useState } from 'react';
import './SearchBar.css';
import { supabase } from './supabaseConfig'; // import the supabase client

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
              .from('recipes')  // The table name is 'recipes'
              .select('description')  // Fetch the 'description' column
              .ilike('description', `${value}%`);  // The % are wildcards
            if (error) {
              console.log('Error: ', error);
            } else {
              setSuggestions(recipes.map(recipe => recipe.description));  // Use 'description' here too
            }
          } else {
            setSuggestions([]);
          }
        };

    const handleClick = suggestion => {
        setSearchText(suggestion);
        setSelectedRecipe(suggestion); // set the clicked suggestion as the selected recipe
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
            setSearchText(suggestions[activeSuggestion]);
            setSelectedRecipe(suggestions[activeSuggestion]); // set the active suggestion as the selected recipe
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
                    {suggestions.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleClick(item)}
                            className={index === activeSuggestion ? "active" : ""}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {selectedRecipe && (
                <div className="recipe-box">
                    <h2>Selected Recipe:</h2>
                    <p>{selectedRecipe}</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
