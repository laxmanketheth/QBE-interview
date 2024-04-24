
import React, { useState } from 'react'
import './Toggle.css'

const Toggle = () => {

    const [toggleState, setToggleState] = useState(false)

    const toggleTab = (state) => {
        setToggleState(state)
    }

    return (
        <div className='tabContainer'>
            <div
                className={toggleState === false ? "activeTab" : "tabs"}
                onClick={() => toggleTab(false)}
            >
                Registration number
            </div>

            <div
                className={toggleState === true ? "activeTab" : "tabs"}
                onClick={() => toggleTab(true)}
            >
                Postcode
            </div>
        </div>
    )
}

export default Toggle
