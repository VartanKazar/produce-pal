import React, {useState} from 'react';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"
import StarRating from './StarRating';
import { addRecipe } from '../redux/slices/plannerSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { useSelector, useDispatch } from 'react-redux';

const RecipeCard = ({data, onClick}) => {

    const dispatch = useDispatch()
    const { recipes } = useSelector(state => state.planner)

    const [isAdded, setIsAdded] = useState(0)

    const handleAddClick = (e) => {
        e.stopPropagation()
        dispatch(addRecipe(data))
        setIsAdded(1)
    }

    //Checks if the recipe is already in the user's planner.
    //If it is, disable the Add To Planner button.
    const getAddState = () => {
        let isAdded = 0

        recipes.forEach(addedRecipe => {
            if(addedRecipe.id === data.id)
                isAdded = 1
        })

        return isAdded
    }

    return (
        <div 
        className={`recipe-card-container ${isAdded && "disabled"}`}
        key = {`recipe-div-${data.id}`}
        onClick={onClick}
        >
            <span className='recipe-card-header-section'>

                <span>
                    <i className="fa-solid fa-hourglass"></i>
                    {data.cookTime}
                </span>

                <h3 
                style = {{
                    wordBreak: "break-word",
                    wordWrap: "break-word",
                    textAlign: "center",
                    textDecoration: "underline"
                }}>
                    {data.name}
                </h3>

                <span>
                    <i className="fa-solid fa-person"></i>
                    {data.servingSize}
                </span>

            </span>
            {data && data.rating && data.reviews &&
                <div className='recipe-card-star-section'>
                    <StarRating rating={data.rating}/>
                    <p style={{fontStyle: "italic"}}>{`(${data.reviews.length})`}</p>
                </div>
            }
            <div className='image-container'>
                <img 
                className='image'
                src={RecipeDefaultIcon}
                alt=""
                />
            </div>

            <p>{`${data.calories} Calories`}</p>

            <button 
            className="button"
            onClick={(e) => handleAddClick(e)}
            disabled={getAddState()}
            >
                <FontAwesomeIcon 
                icon={faPlus}
                style = {{
                    marginRight: "0.5rem"
                }}
                />
                Add
            </button>
        </div>
    )
}

export default RecipeCard;