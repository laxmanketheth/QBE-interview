import React, { useState } from 'react'
import './Input.css'

const Input = ({ toggleState }) => {
    // console.log(toggleState);
    const [inputData, setInputData] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    console.log(inputData);

    const handleChange = (e) => {
       let inputVal = e.target.value;
       const numbersAllowed = /^[0-9\b]+$/;

       if(numbersAllowed.test(inputVal)){
        setInputData(inputVal)
        setErrorMessage('')
       }
       else{
        setInputData('')
        setErrorMessage('Type only numbers')
       }
        // console.log(inputVal);
        // setInputData(inputVal)
    }
    return (
        <div className="inputContainer">
            {
            toggleState ?
                <>
                <input
                    className='input'
                    type="text"
                    placeholder='Postcode'
                    value={inputData}
                    onChange={handleChange}
                />
                <h3>{errorMessage}</h3>
                </>
                :
                <>
                <input
                    className='input'
                    type="text"
                    placeholder='Registration number'
                    value={inputData}
                    onChange={handleChange}
                />
                <h3>{errorMessage}</h3>
                </>
                
            }
        </div>
    )
}

export default Input
