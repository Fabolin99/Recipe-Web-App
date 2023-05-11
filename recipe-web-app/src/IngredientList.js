// Porter Hatch 
// May 10th 2023

import React, { Component } from 'react';
export default class IngredientList extends Component {}

class IngredientList extends React.Component {
    
    ingredients = [
        [1, "item", "eggs"],
        [2, "lbs", "chicken"],
        [3, "lbs", "hamburger"],
        [12, "item", "tortillas"],
        [3, "item", "eggs"], 
        [12, "item", "blueberry muffins"], 
        [3,"cups", "flour"],
        [2, "tbsp", "baking soda"],
        [2, "cups", "flour"], 
        [4, "cups", "milk"], 
        [1, "item", "pickles"],
        [1,"item", "celery"]
    ];
    constructor(props) {
        super(props);
        this.state = {
            ingredients: IngredientList.CompileIngredients(this.ingredients)
        };
    }
    static CompileIngredients(ingredients) {
        
        const combinedItems = {};
    
        for (let i = 0; i <= ingredients.length; i++) {
            const [quantity, unit, name] = ingredients[i];
            const key = name.toLowerCase(); // Use lowercase name as key
                
            // If this item has already been added, increment the quantity
            if (combinedItems[key]) {
            combinedItems[key][0] += quantity;
            }
            // Otherwise, add a new entry for this item
            else {
            combinedItems[key] = [quantity, unit, name];
            }
        }
        return Object.values(combinedItems);
    }
    ingredients = IngredientList.CompileIngredients(this.ingredients)
    
    

    render() {
        return <h2>{JSON.stringify(this.state.ingredients)}</h2>;
    }
}

