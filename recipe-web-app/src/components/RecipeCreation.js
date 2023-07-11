import "./Recipe-Creation/styling.css"
import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ixfirovbkskvyhrltteh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Zmlyb3Zia3Nrdnlocmx0dGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDQzMDMsImV4cCI6MjAwMDYyMDMwM30.e-9p8pkQ7T5FnXai60BydhcREf1O-Ga3h0VTZzCCUPY'
const supabase = createClient(supabaseUrl, supabaseKey)


function RecipeCreation() {
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleInstructionsChange = (e) => {
        setInstructions(e.target.value);
    };

    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value);
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!image) {
                setErrorMessage('Please upload an image.');
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000); // Clear error message after 3 seconds
                return;
            }

            const fileData = await readFileAsBase64(image);

            const { data, error } = await supabase.from('recipes').insert([
                {
                    description,
                    ingredients,
                    instructions,
                    image_data: fileData,
                },
            ]);

            if (error) {
                throw error;
            }

            console.log('Recipe saved successfully:', data);
            setSuccessMessage('Recipe saved successfully!');
            setIsSubmitted(true);
            setDescription('');
            setIngredients('');
            setInstructions('');
            setImage(null);

            e.target.reset(); // Reset the form fields

            // Reset success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('An error occurred:', error);
            setErrorMessage('Error saving recipe. Please try again.');

            // Reset error message after 3 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    const readFileAsBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="container">
            <h1>Add a Recipe</h1>
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Enter description (e.g., Banana bread ...)"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={handleIngredientsChange}
                        placeholder="Enter ingredients (e.g., 1 cup flour, 2 eggs, ...)"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={handleInstructionsChange}
                        placeholder="Enter instructions (e.g., first, add the two eggs and milk together...)"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Save</button>
                </div>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {isSubmitted && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default RecipeCreation;

