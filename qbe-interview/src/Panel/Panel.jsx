import React, { useState } from 'react'
import './Panel.scss'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Toggle from '../components/Toggle/Toggle';
import Input from '../components/Input/Input';

const Panel = () => {
  const [toggleState, setToggleState] = useState(false);
  const handleToggle = (state) => {
    setToggleState(state)
  }

  return (
    <>
      <div className='panelContainer'>
        <div className='panelSubContainer'>
          <div className="panelCard">

            <div className='panelCardInnerBox1'>
              <h3 className='panelCardHeading'>One more thing</h3>
              <p className='text'>What's your vehicle registration number or garaging postcode?</p>
              <Toggle toggleState={toggleState} handleToggle={handleToggle} />
            </div>

            <div className='panelCardInnerBox2'>
              {
                toggleState === false ?
                  <div className='subContainer'>
                    <div className='subContainerHeadingBox'>
                      <h3 className='subContainerHeading'>What's your vehicle registration number?
                        <InfoOutlinedIcon className='infoIcon' />
                      </h3>
                    </div>

                    <Input toggleState={toggleState} />

                    <div className='info'>
                      <p >Please enter the registration of the insured vehicle</p>
                    </div>

                  </div>

                  :

                  <div className='subContainer'>
                    <div className='subContainerHeadingBox'>
                      <h3 className='subContainerHeading'>What's your postcode?
                        <InfoOutlinedIcon className='infoIcon' />
                      </h3>
                    </div>
                    <Input toggleState={toggleState} />
                    <div className='info'>
                      <p >Please enter the postcode where your vehicle is garaged</p>
                    </div>

                  </div>
              }
            </div>
            <div className='buttonContainer'>
              <button>Continue</button>
            </div>

          </div>
        </div>

        <div className='termsContainer'>
          <u>Terms and Conditions</u>
        </div>
      </div>
    </>
  )
}

export default Panel



