import React from 'react';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"
import StarRating from './StarRating';

const RecipeCardFront = ({data}) => {

    const renderRatingSection = () => {



        return (
            <div className='recipe-card-star-section'>
                <StarRating rating={5}/>
            </div>
        )
    }

    return (
        <div className='recipe-card-front-container'>

            <h2>{data.name}</h2>
            {data && data.rating && data.reviews &&
                <div className='recipe-card-star-section'>
                    <h5>{data.rating}</h5>
                    <StarRating rating={data.rating}/>
                    <h5>{`${data.reviews.length} reviews`}</h5>
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
        </div>
    )
}

export default RecipeCardFront;