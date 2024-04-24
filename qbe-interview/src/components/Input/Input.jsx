import React from 'react'
import './Input.css'

const Input = ({ toggleState }) => {
    // console.log(toggleState);
    return (
        <div className="inputContainer">
            {
            toggleState ?
                <input
                    className='input'
                    type="text"
                    placeholder='Postcode'
                />
                :
                <input
                    className='input'
                    type="text"
                    placeholder='Registration number'
                />
            }
        </div>
    )
}

export default Input
