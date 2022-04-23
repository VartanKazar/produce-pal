import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRoutine, clearSelectedRoutine } from '../redux/slices/plannerSlice';
import { useNavigate } from 'react-router-dom';



const Planner = () => {

    const dispatch = useDispatch()
    const { recipes } = useSelector(state => state.planner)

    const navigate = useNavigate()

    return (
        <div className='planner-page'>


        </div>
    )

}

export default Planner;