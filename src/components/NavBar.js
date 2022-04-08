import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCalendarAlt, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {

    //Dummy variables to temporarily make the indexed icons work.
    //Replace them with the redux <cartItemCount> and <plannerItemCount> variables when available.
    const cartitemCount = 0;
    const plannerItemCount = 0;

    const [drawer, setDrawer] = useState(0)

    const handleDrawerClick = () => {
        if(drawer === 0)
            setDrawer(1)
        
        else setDrawer(0)
    }

    return (
        <div className={`nav-bar ${drawer === 1 ? "drawer-active" : ""}`} id="nav-bar-container">
            {drawer === 0 &&
            <FontAwesomeIcon icon={faAnglesRight} className="nav-icon-default" onClick={() => handleDrawerClick()}/>
            }

            <h2 className='nav-bar-title'>Produce Pal</h2>

            <div className='nav-bar-user-section'>

                <div className={`nav-icon-indexed ${plannerItemCount === 0 ? "hidden" : ""}`} count={plannerItemCount} >
                    <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon-default"/>
                </div>

                <div className={`nav-icon-indexed ${cartitemCount === 0  ? "hidden" : ""}`} count={cartitemCount} >
                    <FontAwesomeIcon icon={faCartShopping} className="nav-icon-default"/>
                </div>
                <button>Login</button>
            </div>

                <div className={`nav-bar-drawer ${drawer === 1 ? "active" : ""}`}>
                    {drawer === 1 && 
                        <FontAwesomeIcon 
                        icon={faAnglesLeft} 
                        className="nav-icon-default drawer-collapse-icon" 
                        onClick={() => handleDrawerClick()}/>
                    }
                </div>

        </div>
    )
}

export default NavBar;