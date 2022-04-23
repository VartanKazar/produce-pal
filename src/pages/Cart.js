import React from 'react';

const Cart = () => {



    const renderIngredientsView = () => {

        return (
            <React.Fragment>
                <h1>
                    You need these ingredients.  Do you want to make any changes?
                </h1>

                <p>You can get rid of some ingredients if you already have them, or you can substitute an ingredient for another.</p>
            
                <div className='planner-ingredients-container'>
                    
                </div>
            </React.Fragment>
        )
    }

    return (
        <div>
            {renderIngredientsView()}
        </div>
    )
}

export default Cart;