import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCalendarAlt, faCircleXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const NavBar = () => {

    //Dummy variables to temporarily make the indexed icons work.
    //Replace them with the redux <cartItemCount> and <plannerItemCount> variables when available.
    const cartitemCount = 0;
    const plannerItemCount = 0;

    const [drawer, setDrawer] = useState(0)

    const handleDrawerClick = () => {
        if(drawer === 0){
            setDrawer(1)
            // var root = document.getElementById("Page")
            // root.style.filter = "blur(5px) brightness(0.25)"
            // root.style.pointerEvents = "none"

        }
        
        else setDrawer(0)
    }

    const handleClickOut = (event) => {
        if(event.target.id = "nav-bar-drawer-container")
            setDrawer(0)
    }

    return (
        <React.Fragment>

            <div className="nav-bar">
                
                <FontAwesomeIcon icon={faBars} className="nav-icon-default" onClick={() => handleDrawerClick()}/>
                
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
            </div>

            <aside 
            className={`nav-bar-drawer-container ${drawer === 1 ? "active" : ""}`} 
            id="nav-bar-drawer-container"
            onClick={(e) => handleClickOut(e)}
            />

            <aside className={`nav-bar-drawer ${drawer === 1 ? "active" : ""}`}>
                
                <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="nav-icon-default drawer-collapse-icon" 
                onClick={() => handleDrawerClick()}/>
                
                <a id="nav-bar-link" href="/">Home</a>
                <a id="nav-bar-link" href="/recipes">Recipes</a>
            </aside>
        </React.Fragment>
    )
}

export default NavBar;