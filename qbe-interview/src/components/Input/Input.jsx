import React, { useState } from 'react'
import './Input.scss'

const Input = ({ toggleState }) => {
    // console.log(toggleState);
    const [inputData, setInputData] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [borderBottom, setBorderBottom] = useState('')

    const handleChange = (e) => {
        let inputVal = e.target.value;
        const numbersAllowed = /^[0-9\b]+$/;

        if (numbersAllowed.test(inputVal)) {
            setInputData(inputVal)
            setErrorMessage('')
        }
        else {
            setInputData('')
            setErrorMessage('Only numbers are allowed')
            setBorderBottom('2px solid red')
        }
    }
    return (
        <div className="inputContainer">
            {
                toggleState ?
                    <>
                        <input
                            style={{ borderBottom: borderBottom }}
                            className='input'
                            type="text"
                            placeholder='Postcode'
                            value={inputData}
                            onChange={handleChange}
                        />
                        <p className='alert'>{errorMessage}</p>
                    </>
                    :
                    <>
                        <input
                            style={{ borderBottom: borderBottom }}
                            className='input'
                            type="text"
                            placeholder='Registration number'
                            value={inputData}
                            onChange={handleChange}
                        />
                        <p className='alert'>{errorMessage}</p>
                    </>

            }
        </div>
    )
}

export default Input
