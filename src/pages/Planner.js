import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PlannerCard from '../components/PlannerCard';
import RecipeDefaultIcon from "../assets/recipe-default-icon.png"
import nextId from "react-id-generator";
import { setPrefix } from "react-id-generator";

setPrefix("planner-card-");

const Planner = () => {

    const dispatch = useDispatch()
    const { recipes } = useSelector(state => state.planner)

    const navigate = useNavigate()

    return (
        <div className='planner-page'>

            <p className='text-large bold full-width text-center'>
                Make changes or remove recipes
            </p>

            <PlannerCard 
            id={nextId()}
            title="bleh"
            image={RecipeDefaultIcon}
            />

            

        </div>
    )

}

export default Planner;