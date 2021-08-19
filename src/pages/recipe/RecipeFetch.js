import React, { useState, useEffect } from 'react';

import Receipe from './Receipe'

const RecipeFetch = ({ menuId }) => {

    console.log(menuId);
    
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        fetch(
            'https://api.spoonacular.com/recipes/'+menuId+'/information?includeNutrition=false&apiKey=49a44e0077174e078b66fe7875e4e43a'
        )
        .then((response) => response.json())
        .then((data) => {
            setRecipeData(data);
        })
        .catch(() => {
            console.log("error fetching receipe");
        })
    }, [menuId])

    return (
        <div>
            {recipeData && <Receipe recipe={recipeData} />}
        </div>
    )
}

export default RecipeFetch;