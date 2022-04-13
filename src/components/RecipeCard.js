import React, { useState } from 'react';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"
import StarRating from './StarRating';

const RecipeCard = ({data, buttonOnClick}) => {

    return (
        <div className='recipe-card-container'>

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
                    <h5>{`${data.reviews.length} ratings`}</h5>
                </div>
            }
            <div className='recipe-image-container'>
                <img 
                className='recipe-image'
                src={RecipeDefaultIcon}
                alt=""
                />
            </div>

            <h4>{`Calories: ${data.calories}`}</h4>

            <button 
            variant="alt"
            onClick={buttonOnClick}
            >
                See Details
            </button>
        </div>
    )
}

export default RecipeCard;