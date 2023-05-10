// Porter Hatch 
// May 10th 2023

class IngredientList extends React.Component {
    
    ingredients = [[1, "item", "eggs"],[2, "lbs", "chicken"],[3, "lbs", "hamburger"],[12, "item", "tortillas"],
                [3, "item", "eggs"], [12, "item", "blueberry muffins"], [3,"cups", "flour"], [2, "tbsp", "baking soda"]
                [2, "cups", "flour"], [4, "cups", "milk"], [1, "item", "pickles"],[1,"item", "celery"]];
    
    ingredients = CompileIngredients(ingredients)
    

    render() {
      return <h2>{ingredients}</h2>;
    }
}

function CompileIngredients(ingredients) {
        
    const combinedItems = {};

    for (let i = 0; i < items.length; i++) {
        const [quantity, unit, name] = items[i];
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
