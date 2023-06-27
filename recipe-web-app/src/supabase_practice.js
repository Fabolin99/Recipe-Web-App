import React, { useState } from "react";
import supabase from "./supabaseConfig";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };

  const click = async () => {
    try {
      const { data, error } = await supabase
      .from('recipe')
      .insert({
        name,
        description,
        ingredients,
        instructions,
      });
      if (error) {
        console.error("Error inserting data:", error);
        // Handle error if necessary
      } else {
        console.log("Data inserted successfully:", data);
        // Handle success if necessary
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      // Handle error if necessary
    }
  };
  return (
    <div>
      <label>
        What is the recipe name?
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      <label>
        instructions
        <input
          type="text"
          value={instructions}
          onChange={handleInstructionsChange}
        />
      </label>
      <label>
        ingredients
        <input
          type="text"
          value={ingredients}
          onChange={handleIngredientsChange}
        />
      </label>
      <button onClick={click}>Enter</button>
    </div>
  );
};
export default CreateRecipe;
