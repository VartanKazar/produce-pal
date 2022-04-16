import React from 'react';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"
import StarRating from './StarRating';
import { addRecipe, removeRecipe } from '../redux/slices/plannerSlice';

import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const RecipeCard = ({data, onClick}) => {

    const dispatch = useDispatch()
    const { recipes } = useSelector(state => state.planner)

    const handleAddClick = (e) => {
        e.stopPropagation()
        dispatch(addRecipe(data))
    }

    const handleRemoveClick = (e) => {
        e.stopPropagation()
        dispatch(removeRecipe(data))
    }

    const getNumInPlanner = () => {
        var count = 0

        const item = recipes.find(recipe => recipe.id === data.id)

        if(item){
            count = item.numInPlanner
        }

        return `${count} in planner`
    }

    return (
        <div 
        className='recipe-card-container' 
        key = {`recipe-div-${data.id}`}
        onClick={onClick}
        >

            <h3 
            style = {{
                wordBreak: "break-word",
                wordWrap: "break-word",
                width: "100%",
                textAlign: "center"
            }}>
                {data.name}
            </h3>
            {data && data.rating && data.reviews &&
                <div className='recipe-card-star-section'>
                    <StarRating rating={data.rating}/>
                    <p>{`${data.reviews.length} ratings`}</p>
                </div>
            }
            <div className='recipe-image-container'>
                <img 
                className='recipe-image'
                src={RecipeDefaultIcon}
                alt=""
                />
            </div>

            <p className='bold'>{`Calories: ${data.calories}`}</p>

            <div className='recipe-card-controls'>
                <FontAwesomeIcon 
                icon={faMinus} 
                className="fa-styled-circle-alt"
                onClick={(e) => handleRemoveClick(e)}
                />

                {getNumInPlanner()}

                <FontAwesomeIcon 
                icon={faPlus} 
                className="fa-styled-circle-alt"
                onClick={(e) => handleAddClick(e)}
                />
            </div>
        </div>
    )
}

export default RecipeCard;