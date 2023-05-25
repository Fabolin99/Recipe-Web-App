import React, { useState } from "react";
import ".IngredientList/IngredientList.css";

function IngredientList() {
  const checkBox = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][3] = !updatedIngredients[index][3];
    setIngredients(updatedIngredients);
  };
  const [ingredients, setIngredients] = useState([
    [1, "item", "eggs"],
    [2, "lbs", "chicken"],
    [3, "lbs", "hamburger"],
    [12, "item", "tortillas"],
    [3, "item", "eggs"],
    [12, "item", "blueberry muffins"],
    [3, "cups", "flour"],
    [2, "tbsp", "baking soda"],
    [2, "cups", "flour"],
    [4, "cups", "milk"],
    [1, "item", "pickles"],
    [1, "item", "celery"],
  ]);
  const compileIngredients = () => {
    return (
      <ul className="ingredientList">
        {ingredients.map((ingredient, index) => (
          <li id="ingredientItem" key={index}>
            <label>
              <input
                type="checkbox"
                checked={ingredient[3]}
                onChange={() => checkBox(index)}
              />
              {`${ingredient[0]} ${ingredient[1]} of ${ingredient[2]}`}
            </label>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <h1 className="title">Ingredients</h1>
      {compileIngredients()}
    </div>
  );
}

export default IngredientList;
