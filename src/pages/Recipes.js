import React, { useState, useEffect } from 'react';
import SearchSingle from '../components/SearchSingle';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {

    //This data will mock what gets returned from the database.
    const dummyRecipe = {
        name: "Chicken Porto De Lacartesozou La Mounge",
        description: "The best chicken dish out there.",
        rating: 3.35,
        categories: ["italian", "chicken", "dairy"], 
        calories: 1500,
        reviews: [
            {
                user: "Davey in the Navey",
                review: "the best thing ive ever tasted.",
                rating: 3.35
            }
        ],
        ingredients: [{
            ingredient: "Chicken Breast",
            measurementUnits: "pieces",
            measurementAmount: "5"
        }],
        instructions: [
            [   "season chicken",
                "sear chicken"
            ],

            [
                "do sauce stuff"
            ],

            [
                "boil noodles"
            ],

            [
                "cook noodles with chicken and sauce"
            ]
        ],
        uploadedBy: "Mike S",
        editedBy: "Lisa M",
        imgUrl: "abcd.com"
    }

    return (
        <div className='recipes-page'>
            <SearchSingle/>

            <div className='recipes-category-container'>

                <h1 style = {{alignSelf: "flex-start"}}>My Recipes</h1>
                <div className='recipes-page-section'>

                    <RecipeCard data={dummyRecipe}/>
                    <RecipeCard data={dummyRecipe}/>
                    <RecipeCard data={dummyRecipe}/>
                </div>
            </div>

            <div className='recipes-category-container'>

                <h1 style = {{alignSelf: "flex-start"}}>Italian Recipes</h1>
                <div className='recipes-page-section'>

                    <RecipeCard data={dummyRecipe}/>
                    <RecipeCard data={dummyRecipe}/>
                    <RecipeCard data={dummyRecipe}/>
                </div>
            </div>

            <div className='recipes-category-container'>

            <h1 style = {{alignSelf: "flex-start"}}>Mexican Recipes</h1>
            <div className='recipes-page-section'>

                <RecipeCard data={dummyRecipe}/>
                <RecipeCard data={dummyRecipe}/>
                <RecipeCard data={dummyRecipe}/>
            </div>
            </div>
        </div>
    )
}

export default Recipes;