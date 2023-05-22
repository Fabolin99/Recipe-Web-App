import styles from "./styles.module.css"
import PlannedRecipes from "./PlannedRecipes"
import RecipeSearch from "./RecipeSearch"

/**
 * Recipe Planner
 * @description A screen that allows a user to plan out meals for ingredient compilation
 */
const RecipePlanner = () => {
    return (
        <div className={styles.plannerScreen}>
            <PlannedRecipes />
            <RecipeSearch />
        </div>
    );
};

export default RecipePlanner;