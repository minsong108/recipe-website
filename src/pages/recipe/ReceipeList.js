import React from 'react';
import { Card } from 'react-bootstrap';
import '../box.css';

import Receipe from './Receipe'

import RecipeFetch from './RecipeFetch'

export default function RecipeList ({ menuData }) {

    console.log("In RecipeList.js")
    console.log(menuData);

    return (
        <div>
            
            {menuData.results.map((menu) => {
                return <RecipeFetch menuId={menu.id} />
            })}
            
        </div>
    )
}