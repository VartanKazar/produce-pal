import React, { useState, useEffect } from 'react';
import SearchSingle from '../components/SearchSingle';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons"

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

    const [detailsModal, setDetailsModal] = useState(undefined)

    const handleModalOpen = () => {
        setDetailsModal(1)
    }

    const handleModalClose = () => {
        setDetailsModal(undefined)
    }

    const detailsContent = () => {

        return (
            <div 
            style = {{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center"
            }}
            >
                <div 
                style = {{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignContent: "center"
                }}
                >
                    <FontAwesomeIcon icon={faCircleXmark} className="fa-styled-default" onClick={() => handleModalClose()}/>
                
                    <div style = {{display: "flex", gap: "1rem"}}>
                        <FontAwesomeIcon icon={faPencil} className="fa-styled-default"/>
                        <FontAwesomeIcon icon={faTrashCan} className="fa-styled-default"/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='recipes-page'>
            <SearchSingle/>

            <div className='recipes-category-container'>

                <h1 style = {{alignSelf: "flex-start"}}>My Recipes</h1>
                <div className='recipes-page-section'>

                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                </div>
            </div>

            <div className='recipes-category-container'>

                <h1 style = {{alignSelf: "flex-start"}}>Italian Recipes</h1>
                <div className='recipes-page-section'>

                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                </div>
            </div>

            <div className='recipes-category-container'>

                <h1 style = {{alignSelf: "flex-start"}}>Mexican Recipes</h1>
                <div className='recipes-page-section'>

                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                    <RecipeCard data={dummyRecipe} buttonOnClick={() => handleModalOpen()}/>
                </div>
            </div>

            <Modal 
            state={detailsModal} 
            content = {detailsContent()}
            onClose = {() => setDetailsModal(undefined)}
            />
        </div>
    )
}

export default Recipes;