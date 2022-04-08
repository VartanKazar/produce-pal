import React, { useState, useEffect } from 'react';
import IndexedCard from '../components/IndexedCard';

const Home = () => {

    return (
        <div className='home-page'>
            <div className='steps-section'>

                <IndexedCard 
                index={1}
                title="Choose a Recipe"
                description="Create a recipe from scratch, select one from your list, or search for fun new recipes!"
                />


                <IndexedCard 
                index={2}
                title="Choose Ingredients"
                description="Add your own ingredients or make changes to the recipe."
                />

                <IndexedCard 
                index={3}
                title="Add to Planner"
                description="Add the recipe to your planner.  You can plan for as many meals as you want!"
                />

                <IndexedCard 
                index={4}
                title="Locate Stores"
                description="Enter your location and commute distance.  Then search for nearby stores."
                />

                <IndexedCard 
                index={5}
                title="Select Your Stores"
                description="Select all the stores you want to shop at, then hit search!"
                />

                <IndexedCard 
                index={6}
                title="Plan Your Trip"
                description="Choose where you want to buy each item and save it in your spree list!"
                />
            </div>
        </div>
    )
}

export default Home