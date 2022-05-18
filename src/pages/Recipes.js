import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';
import RecipeFormModal from '../components/RecipeFormModal';
import {addRecipe} from "../redux/slices/plannerSlice"

import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPencil, faTrashCan, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import StarRating from '../components/StarRating';

const Recipes = () => {

    const { myRecipes } = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    
    const [recipeDetailsModalState, setRecipeDetailsModalState] = useState(undefined)
    const [recipeFormModalState, setRecipeFormModalState] = useState(undefined)
    const [selectedRecipe, setSelectedRecipe] = useState(undefined)
    const [searchFilters, setSearchFilters] = useState({})

    const openRecipeDetailsModal = (recipe) => {
        
        setSelectedRecipe(recipe)
        setRecipeDetailsModalState("recipe-details")
    }

    const openRecipeFormModal = () => {
        
        setSelectedRecipe(undefined)
        setRecipeFormModalState(1)
    }

    const handleModalClose = () => {
        setRecipeDetailsModalState(undefined)
    }

    const handleSearchFiltersChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSearchFilters(values => ({...values, [name]: value}))
    }

    const recipeDetails = ((selectedRecipe) && 
        <div className='recipe-modal-container'>
            
            <div className='recipe-modal-toolbar'>

            
                <p className='text-center-vert'>{`Uploaded by: ${selectedRecipe.uploadedBy}`}</p>

                {selectedRecipe.editedBy && selectedRecipe.editedBy !== "" &&
                <p>{`Edited by: ${selectedRecipe.editedBy}`}</p>
                }
                <div style = {{display: "flex", gap: "1rem"}}>
                    <FontAwesomeIcon icon={faPencil} className="icon icon-size-5"/>
                    <FontAwesomeIcon icon={faTrashCan} className="icon icon-size-5"/>
                </div>
            </div>

            <div className='recipe-modal-categories'>
                {selectedRecipe.categories.map((category, index) => (
                    <p className='font-weight-3 font-size-3'>
                        {`${category}${index < selectedRecipe.categories.length - 1 ? "," : ""}`}
                    </p>
                ))

                }
            </div>

            <div className='recipe-modal-section'>
                <h2>
                    {`${selectedRecipe.ingredients.length} Ingredients`}
                </h2>

                <div>
                    {
                    selectedRecipe.ingredients.map((ingredient, index) => (
                        <p>
                            {`${index + 1}.  ${ingredient.measurementAmount} 
                            ${ingredient.measurementUnits} 
                            ${ingredient.ingredient}`}
                        </p>
                    ))
                    }
                </div>
                
            </div>

            <div className='recipe-modal-section bordered'>
                <h2>
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

            <div className='recipe-modal-section bordered'>
                <h2>{`${selectedRecipe.reviews.length} 
                    ${selectedRecipe.reviews.length === 1 ? "Review" : "Reviews"}`}
                </h2>

                {selectedRecipe.reviews.map(review => (
                    <div>
                        <p className='font-weight-4'>{review.user}</p>

                        <div className='review-title-section'>
                            <StarRating rating={review.rating} />
                            <p className='font-style-italic font-weight-2'>{review.title}</p>
                        </div>

                        <p>{review.review}</p>
                    </div>
                ))

                }
                
                <button 
                className='button' 
                style={{
                    marginTop: "1rem"
                }}
                >
                    Load 10 more
                </button>
            </div>

        </div>
    )

    const renderModalContent = () => {
        let element = undefined;

        if(selectedRecipe && recipeDetailsModalState === "recipe-details")
            element = recipeDetails
        
        return element;
    }

    //Section should be the name of the section label.
    //Items should hold an array of the recipe cards.
    //SectionActions should hold any of the interaction options associated with a section.
    const renderSection = (section, items, sectionActions=undefined) => (
        <div className='recipes-category-container'>

            <span className='recipes-category-header'>

            <h1 style = {{alignSelf: "flex-end"}}>{section}</h1>
                {sectionActions &&
                sectionActions
                }
            </span>

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
                    alignItems: "center",
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
                    className='icon alt icon-size-4'/>
                </div>

                <label 
                htmlFor='recipe-sort' 
                style={{
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

                <button
                className='button'
                type='button'
                style={{
                    alignSelf: "flex-end"
                }}
                onClick={() => setRecipeDetailsModalState("filters")}
                >
                    Filters
                </button>

            </form>

            {renderSection(
                "My Recipes",

                myRecipes.map((recipe, index) => (
                <RecipeCard 
                data={recipe} 
                key={`recipe-${recipe.id}`}
                onClick={() => openRecipeDetailsModal(recipe)}
                />
                )),

                <React.Fragment>
                    <button
                    className='button'
                    onClick={() => openRecipeFormModal()}
                    >
                        <FontAwesomeIcon 
                        icon={faPlus}
                        style = {{
                            marginRight: "0.5rem"
                        }}
                        />
                        Recipe
                    </button>

                    <button
                    className='button'

                    >
                        <FontAwesomeIcon 
                        icon={faPlus}
                        style = {{
                            marginRight: "0.5rem"
                        }}
                        />
                        Shopping List
                    </button>
                </React.Fragment>
            )}

            <Modal 
            state={recipeDetailsModalState} 
            content = {renderModalContent()}
            onClose = {handleModalClose}
            />

            <RecipeFormModal
            modalState={recipeFormModalState}
            setModalState={setRecipeFormModalState}
            />
        </div>
    )
}

export default Recipes;