import React, { useState } from 'react';

const Modal = ({state, onClose, content}) => {

    const handleClickOut = (event) => {
        if(event.target.className === "modal-container active")
            onClose()
    }

    return(
        <aside 
        className={`modal-container ${state ? "active" : ""}`}
        onClick={onClose ? (e) => handleClickOut(e) : () => {}}
        >
            <aside className='modal-content-container'>
            {content &&
                content
            }
            </aside>
        </aside>
    )
}

export default Modal;