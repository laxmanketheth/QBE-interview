import React from 'react'
import './Toggle.css'

const Toggle = ({toggleState, handleToggle}) => {

    const handleClick = (state) => {
        handleToggle(state)
    }

    return (
        <div className='tabContainer'>
            <div
                className={toggleState === false ? "activeTab" : "tabs"}
                onClick={() => handleClick(false)}
            >
                Registration number
            </div>

            <div
                className={toggleState === true ? "activeTab" : "tabs"}
                onClick={() => handleClick(true)}
            >
                Postcode
            </div>
        </div>
    )
}

export default Toggle

