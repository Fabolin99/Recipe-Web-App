import styles from "./RepicePlanner/styles.css";
import PlannedRecipes from "./RepicePlanner/PlannedRecipes"
import RecipeSearch from "./RepicePlanner/RecipeSearch"



/**
 * Recipe Planner
 * @description A screen that allows a user to plan out meals for ingredient compilation
 */
const RecipePlanner = () => {
    console.log(styles)
    return (
        <div className="plannerScreen">
            <PlannedRecipes />
            <RecipeSearch />
        </div>
    );
};

export default RecipePlanner;