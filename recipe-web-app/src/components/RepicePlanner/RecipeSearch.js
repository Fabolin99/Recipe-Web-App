import React, { useState, useEffect, useContext } from 'react';
import { PlannedRecipesContext } from '../../contexts/PlannedRecipeContext';
import RecipeCard from './RecipeCard';
import supabase from "../../supabaseConfig";

/**
 * RecipeSearch
 * @description Search for recipes and display them in a list.
 */
const RecipeSearch = () => {
    const { addPlannedRecipe } = useContext(PlannedRecipesContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);

    // Handle the initial search and any subsequent searches
    useEffect(() => {
        const handleSearch = async () => {
            try {
                let { data, error } = await supabase
                    .from('recipes')
                    .select()
                    .ilike('description', `%${searchTerm}%`);

                if (error) {
                    console.error('Error fetching recipes:', error);
                    return;
                }

                if (searchTerm === '') {
                    // If no search term is provided, fetch all recipes
                    ({ data, error } = await supabase.from('recipes').select());

                    if (error) {
                        console.error('Error fetching recipes:', error);
                        return;
                    }
                }

                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        handleSearch();
    }, [searchTerm]);

    const search = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="planContainer recipeSearch">
            <h2>Recipes</h2>
            <div className="searchPlanContainer">
                <input
                    className="searchBar"
                    type="text"
                    value={searchTerm}
                    onChange={search}
                    placeholder="Search recipes"
                />
            </div>
            <div className="recipeList">
                <ul>
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} onClickFunction={() => addPlannedRecipe(recipe)} buttonText={"Add Recipe"}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeSearch;
 