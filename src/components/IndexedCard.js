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
                textDecoration: "underline",
                width: '100%',
                textAlign: "center"
            }}
            >
                {title}
            </h3>

            {description}
        </div>
    )
}

export default IndexedCard;