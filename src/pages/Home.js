import React, { useState, useEffect } from 'react';
import IndexedCard from '../components/IndexedCard';

const Home = () => {


    return (
        <div className='home-page'>
            <IndexedCard 
            index={1}
            title="Choose a Recipe"
            description="Create a recipe from scratch, or select one from your list."
            />
        </div>
    )
}

export default Home