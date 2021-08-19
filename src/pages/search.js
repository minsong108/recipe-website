import React, { useState, Component } from 'react';
import YTSearch from 'youtube-api-search';
import ReceipeList from './recipe/ReceipeList';
import YoutubeList from './youtube/YoutubeList';
import MealPlanList from './recipe/MealPlanList';
import './search.css';

const Search = () => {

    const [menuData, setMenuData] = useState(null);
    const [menuInput, setMenuInput] = useState("");

    const [mealPlan, setMealPlan] = useState(null);
    const [calorieInput, setCalorieInput] = useState(0);

    const [ytVideoInput, setYtVideoInput] = useState("");
    const [videoData, setVideoData] = useState(null);

    function getMenuData() {

        console.log("In search.js")
        console.log(menuInput);

        setMealPlan(null);
        setVideoData(null);

        fetch(
            'https://api.spoonacular.com/recipes/complexSearch?apiKey=49a44e0077174e078b66fe7875e4e43a&query='+menuInput
        )
        .then((response) => response.json())
        .then((data) => {
            setMenuData(data);
        })
        .catch(() => {
            console.log("error");
        });
    }

    function handleMenuInputChange(e) {
        setMenuInput(e.target.value);
    }

    function getMealPlan() {

        setMenuData(null);
        setVideoData(null);

        fetch(
            'https://api.spoonacular.com/mealplanner/generate?apiKey=49a44e0077174e078b66fe7875e4e43a&timeFrame=day&targetCalories='+calorieInput
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMealPlan(data);
        })
        .catch(() => {
            console.log("error");
        });
    }

    function handleCalorieInputChange(e) {
        setCalorieInput(e.target.value);
    }

    function searchYT() {

        console.log("In searchYT: " + ytVideoInput);

        setMenuData(null);
        setMealPlan(null);

        YTSearch({ key: "AIzaSyDN9tQiQrtjNGTIus6T6BtKNJQYD6wlg2w", term: ytVideoInput}, videos => {
             console.log(videos);
             setVideoData(videos);
        })
    }

    function handleYtChange(e) {
        setYtVideoInput(e.target.value);
    }

    return (

        <div>

            <div className="search">

                <label style={{marginTop: '3rem', color: '#FF5657'}}>Search Receipe of the Menu</label>
                <input
                    type="text"
                    placeholder="Enter Menu"
                    onChange={handleMenuInputChange}
                />
                <button onClick={getMenuData}>Get Receipe!</button>

                <label style={{color: '#FF5657'}}>
                    Don't know what to eat today?{"\n"}
                    Get a Meal Plan for Today!
                </label>
                <input
                    type="text"
                    placeholder="Enter Daily Calorie Intake to Search Today's Meals"
                    onChange={handleCalorieInputChange}
                />
                <button onClick={getMealPlan}>Get Meal Plan!</button>

                <label style={{color: '#FF5657'}}>Search for Tutorial Video</label>
                <input
                    type="text"
                    placeholder="Enter Recipe you want to search for..."
                    onChange={handleYtChange}
                />
                <button onClick={searchYT}>Get Tutorial!</button>

                {
                    (menuData && <ReceipeList menuData={menuData}/>) ||
                    (mealPlan &&  <MealPlanList mealPlan={mealPlan}/>) ||
                    (videoData && <YoutubeList videoData={videoData}/>)
                }

            </div>
        </div>
    )
}

export default Search