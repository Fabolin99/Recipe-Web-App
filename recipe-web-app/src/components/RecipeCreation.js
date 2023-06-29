import "./styling.css"
import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ixfirovbkskvyhrltteh.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
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
                    ingredients: JSON.parse(ingredients),
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
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={handleIngredientsChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={handleInstructionsChange}
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
                <button type="submit">Save</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {isSubmitted && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default RecipeCreation;

