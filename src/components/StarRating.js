import React, { useEffect, useState } from 'react';

const StarRating = ({rating}) => {

    const [starWidth, setStarWidth] = useState(0)

    useEffect(() => {
        var percentage = (rating / 5) * 100
        setStarWidth(`${Math.round((percentage / 10) * 10)}%`)
    }, [])


    return (
        <div className='stars-outer'>
            <div className='stars-inner' style = {{width: starWidth}}/>
        </div>
    )
}

export default StarRating;