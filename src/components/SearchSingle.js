import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchSingle = () => {

    return (
        <div className='search-container-single'>
            <input 
            type="search"
            className='textfield-simple'
            placeholder="Search for a recipe"
            spellCheck={false}
            wrap="false"
            />

            <div className='search-icon-container'>
                <FontAwesomeIcon 
                className='search-icon'
                icon={faSearch} />
            </div>
        </div>
    )
}

export default SearchSingle;