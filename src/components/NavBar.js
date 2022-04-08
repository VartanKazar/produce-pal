import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {

    //Dummy variables to temporarily make the indexed icons work.
    //Replace them with the redux <cartItemCount> and <plannerItemCount> variables when available.
    const cartitemCount = 5;
    const plannerItemCount = 2;

    return (
        <div className='nav-bar'>
            <FontAwesomeIcon icon={faBars} className="nav-icon-default"/>

            <h2>Produce Pal</h2>

            <div className='nav-bar-user-section'>

                <div className={`nav-icon-indexed ${plannerItemCount === 0}`} count={plannerItemCount} >
                    <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon-default"/>
                </div>

                <div className={`nav-icon-indexed ${cartitemCount === 0}`} count={cartitemCount} >
                    <FontAwesomeIcon icon={faCartShopping} className="nav-icon-default"/>
                </div>
                <button>Login</button>
            </div>

        </div>
    )
}

export default NavBar;