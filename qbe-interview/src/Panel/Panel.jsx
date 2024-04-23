import React from 'react'
import './Panel.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const Panel = () => {
  return (
    <>
      <div className='panelContainer'>

        <div className='panelSubContainer'>

          <div className="panelCard">

            <div className='panelCardInnerBox1'>
              <h3 className='panelCardHeading'>One more thing</h3>
              <p className='text'>What's your vehicle registration number or garaging postcode?</p>
              <input type="text" />
            </div>

            <div className='panelCardInnerBox2'>

              <div className='registrationContainer'>
                <div className='registrationHeadingBox'>
                  <h3 className='registrationHeading'>What's your vehicle registration number?</h3>
                  <InfoOutlinedIcon className='infoIcon' />
                </div>
                <input
                  // className='input'
                  type="text"
                  placeholder='Registration number'
                />
                <p className='info'>Please enter the registration of the insured vehicle</p>
              </div>


              {/* <div className='postCodeContainer'>
                <div className='postCodeHeadingBox'>
                  <h3 className='postCodeHeading'>What's your vehicle registration number?</h3>
                  <InfoOutlinedIcon className='infoIcon' />
                </div>
                <input
                  // className='input'
                  type="text"
                  placeholder='PostCode'
                />
                <p>Please enter the postcode where your vehicle is garaged</p>
              </div> */}


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
