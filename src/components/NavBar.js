import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {

    return (
        <div className='nav-bar'>
            <FontAwesomeIcon icon={faBars} className="nav-bar-dropdown"/>

            <h1>Produce Pals</h1>

            <button>Login</button>
        </div>
    )
}

export default NavBar;