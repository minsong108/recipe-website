import React, { useState, useEffect } from 'react';

import MealPlan from './MealPlan'

const RecipeFetch = ({ menuId, number }) => {

    console.log(menuId);
    
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        fetch(
            'https://api.spoonacular.com/recipes/'+menuId+'/information?includeNutrition=false&apiKey=49a44e0077174e078b66fe7875e4e43a'
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
        })
        .catch(() => {
            console.log("error fetching receipe");
        })
    }, [menuId])

    return (
        <div>
            {mealData && <MealPlan meal={mealData} number={number} />}
        </div>
    )
}

export default RecipeFetch;