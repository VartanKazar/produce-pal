import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {

    return (
        <div className='nav-bar'>
            <FontAwesomeIcon icon={faBars} className="nav-bar-dropdown"/>

            <h2>Produce Pal</h2>

            <button>Login</button>
        </div>
    )
}

export default NavBar;