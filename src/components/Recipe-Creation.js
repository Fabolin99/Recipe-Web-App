import React from "react";
import "./Recipe-Creation/Recipe-Creation.css"

function RecipeCreation() {
    return(
        <div className="content">
            <div className="title">
                <h1>Create Recipe</h1>
            </div>
            <div className="container-1">
                <img src='#' alt=''/>
            </div>
            <div className="container-2">
                <div className="description-title">
                    <h1>Description</h1>
                </div>
                <div className="description-paragraph">
                    <p>A paragraph is a coherent block of text, such as a group of related sentences that develop
                        a single topic or a coherent part of a larger topic. The beginning
                        of a paragraph is indicated by. the beginning of the content, that is, the paragraph
                        is the first content in the document, or.</p>
                </div>
            </div>
            <div className="container-3">
                <div className="ingredients-title">
                    <h1>Ingredients</h1>
                </div>
                <div className="ingredients-paragraph">
                    <p>1. </p>
                    <p>2. </p>
                    <p>3. </p>
                    <p>4. </p>
                </div>
            </div>
            <div className="container-4">
                <div className="instructions-title">
                    <h1>Instructions</h1>
                </div>
                <div className="instructions-paragraph">
                    <p>1. </p>
                    <p>2. </p>
                    <p>3. </p>
                    <p>4. </p>
                </div>
            </div>

        </div>
    )
}

export default RecipeCreation;