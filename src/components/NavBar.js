import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCalendarAlt, faCircleXmark, faBars } from "@fortawesome/free-solid-svg-icons"

import { useSelector } from 'react-redux';

const NavBar = () => {

    const { user } = useSelector((state) => state.user)

    //Dummy variables to temporarily make the indexed icons work.
    //Replace them with the redux <cartItemCount> and <plannerItemCount> variables when available.
    const cartitemCount = 0;
    const plannerItemCount = 0;

    const [drawer, setDrawer] = useState(0)

    //Opens the navbar drawer to the left when the drop down icon is clicked.
    const handleDrawerClick = () => {
        if(drawer === 0)
            setDrawer(1)
        
        else setDrawer(0)
    }

    //Closes the navbar drawer when the user clicks outside the drawer its self.
    const handleClickOut = (event) => {
        if(event.target.id = "nav-bar-drawer-container")
            setDrawer(0)
    }

    return (
        <React.Fragment>

            <div className="nav-bar">
                
                <FontAwesomeIcon icon={faBars} className="fa-styled-default" onClick={() => handleDrawerClick()}/>
                
                <h2 className='nav-bar-title'>Produce Pal</h2>

                <div className='nav-bar-user-section'>

                    <div className={`nav-icon-indexed ${plannerItemCount === 0 ? "hidden" : ""}`} count={plannerItemCount} >
                        <FontAwesomeIcon icon={faCalendarAlt} className="fa-styled-default"/>
                    </div>

                    <div className={`nav-icon-indexed ${cartitemCount === 0  ? "hidden" : ""}`} count={cartitemCount} >
                        <FontAwesomeIcon icon={faCartShopping} className="fa-styled-default"/>
                    </div>
                    <button id="account-button">Login</button>
                </div>
            </div>

            <aside 
            className={`nav-bar-drawer-container ${drawer === 1 ? "active" : ""}`} 
            id="nav-bar-drawer-container"
            onClick={(e) => handleClickOut(e)}
            />

            <aside className={`nav-bar-drawer ${drawer === 1 ? "active" : ""}`}>
                
                <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="fa-styled-default drawer-collapse-icon" 
                onClick={() => handleDrawerClick()}/>
                
                <a id="nav-bar-link" href="/">Home</a>
                <a id="nav-bar-link" href="/recipes">Recipes</a>
                <a id="nav-bar-link">{user ? "Sign Out" : "Sign In"}</a>
            </aside>
        </React.Fragment>
    )
}

export default NavBar;