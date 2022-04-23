import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';
import {addRecipe} from "../redux/slices/plannerSlice"

import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPencil, faTrashCan, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import StarRating from '../components/StarRating';

const Recipes = () => {

    const { recipes } = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    
    const [detailsModal, setDetailsModal] = useState(undefined)
    const [selectedRecipe, setSelectedRecipe] = useState(undefined)
    const [searchFilters, setSearchFilters] = useState({})

    const handleModalOpen = (recipe) => {
        
        setSelectedRecipe(recipe)
        setDetailsModal(1)
    }

    const handleModalClose = () => {
        setDetailsModal(undefined)
    }

    const handleSearchFiltersChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSearchFilters(values => ({...values, [name]: value}))
    }

    const detailsContent = () => {
        if(selectedRecipe === undefined)
            return undefined

        return (
            <div className='recipe-modal-container'>
                {/* The main toolbar at the top of the modal. */}
                <div className='recipe-modal-toolbar'>
                    <FontAwesomeIcon icon={faCircleXmark} className="fa-styled-default" onClick={() => handleModalClose()}/>
                
                    <p className='text-center-vert'>{`Uploaded by: ${selectedRecipe.uploadedBy}`}</p>

                    {selectedRecipe.editedBy && selectedRecipe.editedBy !== "" &&
                    <p>{`Edited by: ${selectedRecipe.editedBy}`}</p>
                    }
                    <div style = {{display: "flex", gap: "1rem"}}>
                        <FontAwesomeIcon icon={faPencil} className="fa-styled-default"/>
                        <FontAwesomeIcon icon={faTrashCan} className="fa-styled-default"/>
                    </div>
                </div>


                <div className='recipe-modal-section'>
                    <h2 className='full-width text-center'>
                        {`Ingredients (${selectedRecipe.ingredients.length})`}
                    </h2>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                        <p>
                            {`${index + 1}.  ${ingredient.measurementAmount} 
                            ${ingredient.measurementUnits} 
                            ${ingredient.ingredient}`}
                        </p>
                    ))

                    }
                </div>


                <div className='recipe-modal-section bordered'>
                    <h2 className='full-width text-center'>
                        Instructions
                    </h2>

                    {selectedRecipe.instructions.map((instruction, index) => (
                        <div>
                            {instruction.map((step, index) => (
                                <p>{`${index + 1}.  ${step}`}</p>
                            ))
                            }
                        </div>
                    ))

                    }
                </div>

                <div className='recipe-modal-section text-center'>
                    <h2>{`${selectedRecipe.reviews.length} 
                        ${selectedRecipe.reviews.length === 1 ? "Review" : "Reviews"}`}
                    </h2>

                    {selectedRecipe.reviews.map(review => (
                        <div className='review-container'>
                            <p className='bold text-left text-large'>{review.user}</p>

                            <div className='review-title-section'>
                                <StarRating rating={review.rating} />
                                <p className='bold text-left'>{review.title}</p>
                            </div>

                            <p className='text-left'>{review.review}</p>
                        </div>
                    ))

                    }
                    
                    <button variant="alt">Load 10 more</button>
                </div>

            </div>
        )
    }

    //Section should be the name of the section label.
    //Items should hold an array of the recipe cards.
    const renderSection = (section, items) => (
        <div className='recipes-category-container'>
            <h1 style = {{alignSelf: "flex-start"}}>{section}</h1>
            <div className='recipes-page-section'>
                {items}
            </div>
        </div>
    )

    return (
        <div className='recipes-page'>

            <form className='recipe-search-controls'>
                
                <div style = {{
                    display: "grid",
                    width: "100%",
                    gridTemplateColumns: "auto 3rem",
                    gap: "1rem"
                }}>

                    <input 
                    id="recipe-search-text"
                    type="search"
                    placeholder="Search for a recipe"
                    spellCheck={false}
                    wrap="false"
                    onChange={handleSearchFiltersChange}
                    />

                    <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    className='fa-styled-circle-alt fa-styled-golden'/>
                </div>

                <label htmlFor='recipe-sort' style={{
                    width: '16ch'
                }}>
                    Sort By
                    <select 
                    id="recipe-sort" 
                    name="recipe-sort"
                    onChange={handleSearchFiltersChange}
                    >
                        <option key='recipe-sort-name' value='name'>Name</option>
                        <option key='recipe-sort-rating' value='rating'>Rating</option>
                        <option key='recipe-sort-calories' value='calories'>Calories</option>
                        <option key='recipe-sort-cook-time' value='cook-time'>Cook Time</option>
                    </select>
                </label>

            </form>

            {renderSection(
                "My Recipes",
                recipes.map((recipe, index) => (
                    <RecipeCard 
                    data={recipe} 
                    key={`recipe-${recipe.id}`}
                    onClick={() => handleModalOpen(recipe)}
                    />
                ))
            )}

            <Modal 
            state={detailsModal} 
            content = {selectedRecipe && detailsContent()}
            onClose = {() => handleModalClose()}
            />
        </div>
    )
}

export default Recipes;