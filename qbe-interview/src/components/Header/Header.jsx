import React from 'react'
import Steps from '../Steps/Steps'
import './Header.scss'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ClearIcon from '@mui/icons-material/Clear';
import HorizontalSteps from '../HorizontalSteps/HorizontalSteps';

const Header = () => {
    return (
        <div className='OuterContainer'>
            <div className='container'>
                <div className='logo'>
                    <img src="QBE logo.png" alt="" />
                </div>

                <Steps />

                <div className='buttons-container'>
                    <div className='arrowContainer'>
                        <KeyboardArrowLeftIcon className='arrow'/>
                    </div>

                    <span className='vertical-line'>|</span>

                    <div className='clearIconContainer'>
                        <ClearIcon />
                    </div>
                </div>
            </div>
            
            <HorizontalSteps />
    
        </div>

    )
}

export default Header
