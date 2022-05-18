import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRoutine, clearSelectedRoutine } from '../redux/slices/plannerSlice';
import { useNavigate } from 'react-router-dom';

import IndexedCard from '../components/IndexedCard';

const Trips = () => {

    const dispatch = useDispatch()
    const { routines, selectedRoutine } = useSelector(state => state.planner)

    const navigate = useNavigate()

    /*
    There are many steps within the planner page.
    PageView indicates which step in the process the users view is currently in.  Each view correlates to a number.
    There are several views:
        1.  Landing View
        2.  Search View
        3.  Routing Selection View
        4.  Ingredient Modification View
    */
    const [pageView, setPageView] = useState(1)

    //Local states for the search radius and zip code fields of the Search view.
    const [searchInputs, setSearchInputs] = useState({})

    //Asks the user what initial action they want to take.
    //Either they select a general search, or they select a routine they've made already.
    const renderLandingView = () => {


        return (
            <React.Fragment>
                <h1 style = {{
                    width: "100%",
                    textAlign: "center"
                }}>
                    What do you want to do?
                </h1>

                <div className='planner-landing-view'>
                    <h2>Search for stores near your zipcode</h2>

                    <h2>Use one of your shopping routines</h2>

                    <button
                    className='button'
                    onClick={() => setPageView(2)}
                    >
                        Search Stores
                    </button>

                    <button
                    className='button'
                    onClick={() => setPageView(3)}
                    >
                        Pick a Routine
                    </button>
                </div>
            </React.Fragment>
        )
    }

    //Asks the user for a zipcode and driving distance to search with.
    //Will first search through all of the outlet API's for possible locations. 
    //Then will return a google maps view of the best route using those results.
    const renderSearchView = () => {

        const handleSearchClick = (event) => {
            event.preventDefault()

            dispatch(clearSelectedRoutine())
            setPageView(4)
        }

        const handleChange = (event) => {

            const name = event.target.name;
            const value = event.target.value;

            setSearchInputs(values => ({...values, [name]: value}))
        }

        return (
            <React.Fragment>

                <button 
                className='button'
                type="button" 
                variant="icon"
                onClick={() => setPageView(1)}
                >
                    <i className="fa-solid fa-arrow-left-long" type="reset"></i>
                </button>

                <h1>Search for stores near you</h1>

                <form className='planner-search-section' onSubmit={handleSearchClick}>

                    <label htmlFor='searchRadius'>
                        Search Radius (mi)
                        <input
                        id="searchRadius"
                        name='searchRadius'
                        type="text"
                        value={searchInputs.searchRadius || ""}
                        onChange={handleChange}
                        />
                    </label>

                    <label htmlFor='zipCode'>
                        Zip Code
                        <input
                        id="zipCode"
                        name='zipCode'
                        type="text"
                        value={searchInputs.zipCode || ""}
                        onChange={handleChange}
                        />
                    </label>


                    <button className='button' type="submit" variant="icon">
                        <i className="fa-solid fa-magnifying-glass" type="submit"></i>
                    </button>
                </form>
            </React.Fragment>
        )
    }
    
    //Prompts the user to select a routine they've created from previous shopping trips.
    //Selecting a routing will show a vertically stacking list of store tiles.
    const renderRoutineView = () => {

        const handleRoutineChange = (event) => {

            const routine = routines.filter(item => {
                const val = parseInt(event.target.value)
                return item.id === val
            })

            dispatch(selectRoutine(routine[0]))
        }

        const handleSubmitClick = () => {
            setPageView(4)
        }

        return (
            <React.Fragment>
                <button 
                className='button'
                type="reset" 
                variant="icon"
                onClick={() => setPageView(1)}
                >
                    <i className="fa-solid fa-arrow-left-long" type="reset"></i>
                </button>

                <h1>Select a shopping routine</h1>

                <div style = {{
                    display: "inline-block"
                }}>

                    <select 
                    name="routines" 
                    id="routines"
                    onChange={handleRoutineChange}
                    style = {{
                        width: "10rem",
                        marginRight: "1rem"
                    }}
                    >
                        {routines.map(routine => (
                            <option key={routine.id} value={routine.id}>{routine.name}</option>
                        ))
                        }
                    </select>

                    <button 
                    className='button'
                    type="reset" 
                    variant="icon"
                    onClick={handleSubmitClick}
                    >
                        Go
                    </button>
                </div>

                {selectedRoutine && selectedRoutine.shops && selectedRoutine.shops.length > 0 &&
                    <div className='planner-routine-shops-container'>
                        {
                            selectedRoutine.shops.map((shop, index) => (
                                <IndexedCard 
                                index={index} 
                                title={`${shop.name} (${shop.distance} mi)`}
                                description={shop.address}
                                key={`${shop.name}-${shop.address}-${selectedRoutine.id}`}
                                />
                            ))
                        }
                    </div>
                }
            </React.Fragment>
        )
    }

    return (
        <div>
            {(pageView === 1) ? renderLandingView() 
            : 
            (pageView === 2) ? renderSearchView() 
            :
            renderRoutineView() 
            }
        </div>
    )
}

export default Trips