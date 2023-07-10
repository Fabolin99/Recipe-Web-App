import "./RepicePlanner/styles.css";
import PlannedRecipes from "./RepicePlanner/PlannedRecipes"
import RecipeSearch from "./RepicePlanner/RecipeSearch"
import { PlannedRecipesProvider } from "../contexts/PlannedRecipeContext";

// A screen that allows a user to plan out meals for ingredient compilation
const RecipePlanner = () => {
    return (
        <div className="plannerScreen">
            <PlannedRecipesProvider>
                <PlannedRecipes />
                <RecipeSearch />
            </PlannedRecipesProvider>
        </div>
    );
};

export default RecipePlanner;