import React from 'react'

export default function Opcoes({ id, type, isModal, modalName, onOptionClick }) {
    const handleButtonClick = () => {
        onOptionClick(id, type)
    }
    return (
        <a
            className={isModal ? "modal-trigger material-icons" : "material-icons"}
            href={modalName}
            onClick={handleButtonClick}
        >
            {type}
        </a>
    )
}
