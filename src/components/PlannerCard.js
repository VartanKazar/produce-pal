import React, { useState } from 'react';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"

import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"

const PlannerCard = ({id, title, image}) => {

    const [expanded, setExpanded] = useState(0)

    return (
        <div 
        className='recipe-card-container' 
        key={id}
        >
            <h3 className='planner-card-header'>
                {title}
            </h3>

            {expanded === 0 &&
            <div className='image-container'>
                <img 
                className='image'
                src={image}
                alt=""
                />
            </div>
            }

            {expanded === 1 &&
            <div>
                
            </div>
            }

            {expanded === 0 ?
            <button
            className='button'
            variant="alt"
            >
                Make Changes
            </button>

            :

            <button
            className='button'
            variant="alt"
            >
                Save Changes
            </button>

            }
        </div>
    )
}

export default PlannerCard