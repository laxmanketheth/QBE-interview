import React from 'react'
import './Toggle.scss'

const Toggle = ({toggleState, handleToggle}) => {

    const handleClick = (state) => {
        handleToggle(state)
    }

    return (
        <div className='tabContainer'>
            <div
                className={toggleState === false ? "activeTab tab1" : "tabs tab1"}
                onClick={() => handleClick(false)}
            >
                Registration number
            </div>

            <div
                className={toggleState === true ? "activeTab tab2" : "tabs tab2"}
                onClick={() => handleClick(true)}
            >
                Postcode
            </div>
        </div>
    )
}

export default Toggle

