import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons"

/*
state: determines if the modal is open.  Can be either undefined for closed, or anything for opened.
onClose: the callback function that handles any actions that need to be performed on the parents end.
contents: The element to render
disableClickOut: Can be either undefined or any value.  Indicates if clicking anywhere outside the modal contents should close the modal.
toolbar:  Any interaction options that should appear at the top next to the close button.  Should be an array of html elements.

*/
const Modal = ({state, onClose, content, disableClickOut=undefined, toolbar=undefined}) => {

    const handleClickOut = (event) => {
        if(!disableClickOut && event.target.className === "modal-container active")
            onClose()

        else onClose()
    }

    return(
        <aside 
        className={`modal-container ${state && "active"}`}
        onClick={onClose ? (e) => handleClickOut(e) : () => {}}
        >
            {content &&
            <aside className='modal-content-container'>
                <div className='modal-toolbar'>
                    {toolbar && Array.isArray(toolbar) && toolbar.length > 0 &&
                    toolbar.map((item) => item)
                    }

                    <FontAwesomeIcon 
                    icon={faX} 
                    className="icon alt del icon-size-3" 
                    onClick={() => handleClickOut()}
                    />
                </div>
                {content}
            </aside>
            }
        </aside>
    )
}

export default Modal;