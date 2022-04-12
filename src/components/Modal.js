import React, { useState } from 'react';

const Modal = ({state, onClose, content}) => {

    const handleClickOut = (event) => {
        if(event.target.id = "modal-container")
            onClose()
    }

    return(
        <aside 
        className={`modal-container ${state ? "active" : ""}`}
        onClick={(e) => handleClickOut(e)}
        >
            <aside className='modal-content-container'>
            {
                content
            }
            </aside>
        </aside>
    )
}

export default Modal;