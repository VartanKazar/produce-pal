import React, { useState, useEffect } from 'react';
import IndexedCard from '../components/IndexedCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='home-page'>

            <button 
            onClick={() => navigate("/recipes")}
            style = {{
                fontSize: "2rem"
            }}
            >
                Start Planning
            </button>

            <h1>How it Works</h1>

            <div className='steps-section'>
                <IndexedCard 
                index={1}
                title="Choose a Recipe"
                description="Create a recipe, select one from your list, or search for fun new recipes!  Make any changes you want."
                />

                <IndexedCard 
                index={2}
                title="Add to Planner"
                description="Add the recipe to your planner.  You can plan for as many meals as you want!"
                />

                <IndexedCard 
                index={3}
                title="Locate Stores"
                description="Enter your location, then search for nearby stores.  Select the stores you want to shop at, then search for ingredients!"
                />

                <IndexedCard 
                index={4}
                title="Plan Your Trip"
                description="Choose where you want to buy each item and save it in your spree list!"
                />
            </div>


            <div className='promotional-section'>
                <h1 style = {{width: "100%", textAlign: "center"}}>Why use Produce Pal?</h1>
                <IndexedCard 
                index={1}
                title="Save Time"
                description="Know which stores have the cheapest stuff around before you leave.  No more hopping from one store to another to find the cheapest ice cream!"
                />

                <IndexedCard 
                index={2}
                title="Save Money"
                description="No more buying way more than you need from being unsure.  Cut down food waste with meal planning!"
                />
            </div>

        </div>
    )
}

export default Home