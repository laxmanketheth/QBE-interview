import React from 'react'
import './Steps.scss'

const Steps = () => {
  return (
    <>
      <div className='parentContainer'>

        <div className='stepsContainer'>
          <span className='step1'>1</span>
          <span className='dash'>--------------------</span>
          <span className='step2'>2</span>
        </div>

        <div className='stepsHeading'>
          <div className='heading1'>Confirm your details</div>
          <div className='heading2'>Consent</div>
        </div>

      </div>

    </>
  )
}

export default Steps
