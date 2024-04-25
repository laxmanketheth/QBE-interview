import React from 'react'
import './HorizontalSteps.scss'

const HorizontalSteps = () => {
    return (
        <div className='stepsBox'>
            <div className="stepsTextBox">
                <p>Confirm your details</p>
                <p>1 of 2</p>
            </div>

            <div className="horizontalLineContainer">
                <div  >
                    <hr className='greenLine' />
                </div>
                <div >
                    <hr className='whiteLine' />
                </div>
            </div>

        </div>
    )
}

export default HorizontalSteps
