import React from 'react'
import MealPlanFetch from './MealPlanFetch'

export default function MealPlanList({ mealPlan }) {
    
    console.log("In MealPlanList.js")
    console.log(mealPlan);

    var number = 0;

    return (
        <div>
            {mealPlan.meals.map((meal) => {
                number++;
                return <MealPlanFetch menuId={meal.id} number={number} />
            })}
        </div>
    )
}