import React, { useEffect } from 'react';

const IndexedCard = ({index, title, description}) => {

    return (
        <div 
        className="indexed-card"
        id={`index-card-${index}`} 
        key={`index-card-${index}`}
        index={`${index}`}
        >
            <h3
            style = {{
                width: '100%',
                textAlign: "center",
                marginBottom: "1rem"
            }}
            >
                {title}
            </h3>

            {description}
        </div>
    )
}

export default IndexedCard;