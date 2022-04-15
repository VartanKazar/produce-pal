import React, { useState, useEffect } from 'react';
import SearchSingle from '../components/SearchSingle';
import RecipeCard from '../components/RecipeCard';
import Modal from '../components/Modal';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import StarRating from '../components/StarRating';

const Recipes = () => {

    const { recipes } = useSelector((state) => state.recipes)
    
    const [detailsModal, setDetailsModal] = useState(undefined)
    const [selectedRecipe, setSelectedRecipe] = useState(undefined)

    const handleModalOpen = (recipe) => {
        
        setSelectedRecipe(recipe)
        setDetailsModal(1)
    }

    const handleModalClose = () => {
        setDetailsModal(undefined)
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
            <SearchSingle/>

            {renderSection(
                "My Recipes",
                recipes.map((recipe, index) => (
                    <RecipeCard 
                    data={recipe} 
                    detailsClick={() => handleModalOpen(recipe)}
                    key={`recipe-${recipe.id}`}
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