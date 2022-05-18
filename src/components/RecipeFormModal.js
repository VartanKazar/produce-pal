import React, { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons"

const RecipeFormModal = ({modalState, setModalState, data=undefined, clearFields=undefined}) => {

    const initRecipeObj = () => {
        let recipeObj = {}

        let name = ""
        let cookTime = 0
        let servingSize = 0
        let calories = 0
        let ingredients = [
            {
                ingredient: "",
                amount: 0,
                units: ""
            }
        ]
        let instructions = [
            [""]
        ]


        if(data){
            name = data.name
            cookTime = data.cookTime
            servingSize = data.servingSize
            calories = data.calories
            ingredients = data.ingredients
            instructions = data.instructions
        }

        recipeObj.name = name
        recipeObj.cookTime = cookTime
        recipeObj.servingSize = servingSize
        recipeObj.calories = calories
        recipeObj.ingredients = ingredients
        recipeObj.instructions = instructions

        return recipeObj
    }

    const [recipeFormFields, setRecipeFormFields] = useState(initRecipeObj)

    const formView1 = (
        <form>
            <input 
            id="name"
            name="name"
            type="text"
            placeholder="Recipe Name"
            spellCheck={false}
            wrap="false"
            onChange={(e) => handleFieldChange(e)}
            style={{
                width: "40ch"
            }}
            />

            <span>
                <i className="fa-solid fa-hourglass"></i>
                <input 
                id="cookTime"
                name="cookTime"
                type="number"
                placeholder="120"
                spellCheck={false}
                wrap="false"
                onChange={(e) => handleFieldChange(e)}
                style = {{
                    width: "10ch",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem"
                }}
                />
                min
            </span>

            <span>
                <i className="fa-solid fa-person"></i>
                <input 
                id="servingSize"
                name="servingSize"
                type="number"
                placeholder="3"
                spellCheck={false}
                wrap="false"
                onChange={(e) => handleFieldChange(e)}
                style = {{
                    width: "9ch",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem"
                }}
                />
            </span>

            <input 
            id="calories"
            name="calories"
            type="number"
            placeholder="Calories"
            spellCheck={false}
            wrap="false"
            onChange={(e) => handleFieldChange(e)}
            style = {{
                width: "14ch"
            }}
            />
        </form>
    )

    const formView2 = (
        <form>
            
            <h3 className='font-size-6 text-center'>Ingredients</h3>

            <p className='font-weight-2 font-size-3'>Amount</p>
            <p className='font-weight-2 font-size-3'>Units</p>
            <p 
            className='font-weight-2 font-size-3'
            style = {{
                gridColumn: "span 2"
            }}>
                Ingredient
            </p>

            {recipeFormFields && recipeFormFields.ingredients &&
            recipeFormFields.ingredients.map((ingredient, index) => (
                <React.Fragment
                key={`ingredient-fragment-${index}`}
                >
                    <input 
                    id={`ingredients amount ${index}`}
                    name={`ingredients amount ${index}`}
                    key={`ingredients amount ${index}`}
                    value={recipeFormFields.ingredients[index].amount || ''}
                    type="number"
                    placeholder="0"
                    spellCheck={false}
                    wrap="false"
                    onChange={(e) => handleFieldChange(e)}
                    style = {{
                        width: "9ch"
                    }}
                    />

                    <input 
                    id={`ingredients units ${index}`}
                    name={`ingredients units ${index}`}
                    key={`ingredients units ${index}`}
                    value={recipeFormFields.ingredients[index].units || ''}
                    type="text"
                    spellCheck={false}
                    wrap="false"
                    onChange={(e) => handleFieldChange(e)}
                    style = {{
                        width: "12ch"
                    }}
                    />

                    <input 
                    id={`ingredients ingredient ${index}`}
                    name={`ingredients ingredient ${index}`}
                    key={`ingredients ingredient ${index}`}
                    value={recipeFormFields.ingredients[index].ingredient || ''}
                    type="text"
                    spellCheck={false}
                    wrap="false"
                    onChange={(e) => handleFieldChange(e)}
                    style = {{
                        width: "24ch"
                    }}
                    />

                    <FontAwesomeIcon 
                    icon={faTrashCan}
                    className="icon del icon-size-3"
                    onClick={() => handleIngredientDelete(index)}
                    />
                </React.Fragment>
            ))
            }
            <div>
                <button 
                className="button"
                type="button"
                onClick={() => handleAddIngredient()}
                >
                    <FontAwesomeIcon 
                    icon={faPlus}
                    style = {{
                        marginRight: "0.5rem"
                    }}
                    />
                    Ingredient
                </button>
            </div>
        </form>
    )

    const formView3 = (
        <form>
            <div className='recipe-form-instructions'>

                <h3 className='font-size-6 text-center'>Instructions</h3>

                {recipeFormFields.instructions && recipeFormFields.instructions.length &&
                recipeFormFields.instructions.map((part, partIndex) => (
                    <div
                    key={`instructions part-container ${partIndex}`}
                    >

                        <FontAwesomeIcon 
                        icon={faTrashCan}
                        className="icon del icon-size-3"
                        onClick={() => handleDeleteInstructionPart(partIndex)}
                        />

                        {part.map((instruction, instructionIndex) => (
                            <React.Fragment>
                                <input 
                                id={`instructions ${partIndex} ${instructionIndex}`}
                                name={`instructions ${partIndex} ${instructionIndex}`}
                                key={`instructions ${partIndex} ${instructionIndex}`}
                                value={recipeFormFields.instructions[partIndex][instructionIndex] || ''}
                                type="text"
                                spellCheck={false}
                                wrap="false"
                                onChange={(e) => handleFieldChange(e)}
                                style={{
                                    width: "40ch"
                                }}
                                />
    
                                <FontAwesomeIcon 
                                icon={faTrashCan}
                                className="icon del icon-size-3"
                                onClick={() => handleDeleteInstructionStep(instructionIndex)}
                                />
                            </React.Fragment>
                        ))
                        }


                        <button 
                        className="button"
                        type="button"
                        onClick={() => handleAddInstructionStep()}
                        >
                            <FontAwesomeIcon 
                            icon={faPlus}
                            style = {{
                                marginRight: "0.5rem"
                            }}
                            />
                            Step
                        </button>
                    </div>
                ))
                }
            </div>
        </form>
    )

    const views = [formView1, formView2, formView3]

    const toolbar = [
        
        <FontAwesomeIcon
        icon={faArrowLeftLong}
        className="icon alt icon-size-3"
        />,

        <FontAwesomeIcon
        icon={faArrowRightLong}
        className="icon alt icon-size-3"
        />
    ]

    const handleModalClose = () => {
        setModalState(undefined)
    }
    
    //Handles input changes to any of the fields for the create recipe modal.
    //The behavior of updating the state depends on the name of the target input element.
    //If a field is an array, the name of the input element must be the following format: 
    //  `<name of object property> <name of input field> <index>`
    const handleFieldChange = (event) => {
        const names = event.target.name.split(' ');
        const value = event.target.value;

        
        if(names.length > 1){
            const property = `${names[0]}`
            const field = `${names[1]}`
            const index = parseInt(names[2])

            //If the field isn't a number, then we are dealing with the instructions inputs.
            if(isNaN(field)){

                let ingredients = recipeFormFields[property]
                let ingredient = {...ingredients[index], [field]: value}
                ingredients[index] = ingredient
    
                setRecipeFormFields(values => ({...values, [property]: ingredients}))
            }

            else {
                const partIndex = parseInt(names[1])

                let parts = [...recipeFormFields[property]]
                let part = [...parts[partIndex]]
                let instruction = part[index]
                instruction = value
                part[partIndex] = instruction
                parts[index] = part
                setRecipeFormFields(values => ({...values, [property]: parts}))
            }
        }

        else {
            const name = names[0]
    
            setRecipeFormFields(values => ({...values, [name]: value}))
        }
    }

    const handleAddIngredient = () => {

        const ingredientObj = {
            ingredient: "",
            amount: 0,
            unit: ""
        }

        if(!recipeFormFields.hasOwnProperty('ingredients'))
            recipeFormFields.ingredients = []

        let ingredientList = recipeFormFields.ingredients
        ingredientList.push(ingredientObj)

        setRecipeFormFields(values => ({...values, ingredients: ingredientList}))
    }

    const handleIngredientDelete = (index) => {
        let ingredients = recipeFormFields.ingredients
        ingredients.splice(index, 1)

        setRecipeFormFields(values => ({...values, ingredients: ingredients}))
    }

    const handleAddInstructionPart = () => {

    }

    const handleAddInstructionStep = () => {

    }

    const handleDeleteInstructionPart = (index) => {

    }

    const handleDeleteInstructionStep = (index) => {

    }

    return (
        <Modal 
        state={modalState} 
        content = {modalState && views[modalState - 1]}
        toolbar={toolbar}
        onClose = {handleModalClose}
        disableClickOut
        />
    )

}

export default RecipeFormModal