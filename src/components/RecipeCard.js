import React, { useState } from 'react';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"
import StarRating from './StarRating';
import Modal from './Modal';

const RecipeCard = ({data}) => {

    const [detailsModal, setDetailsModal] = useState(undefined)

    const handleModalOpen = () => {
        setDetailsModal(1)
    }

    const detailsContent = () => {

        return (
            <div>

            </div>
        )
    }

    return (
        <div className='recipe-card-container'>

            <h2 
            style = {{
                wordBreak: "break-word",
                wordWrap: "break-word",
                width: "100%",
                textAlign: "center"
            }}>
                {data.name}
            </h2>
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
            onClick={() => handleModalOpen()}
            >
                See Details
            </button>
            
            <Modal 
            state={detailsModal} 
            content = {detailsContent()}
            onClose = {() => setDetailsModal(undefined)}
            />
        </div>
    )
}

export default RecipeCard;