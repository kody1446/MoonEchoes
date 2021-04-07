import React from 'react'
import Button from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video  src='/MoonForest.mp4' autoPlay loop muted /> */}
            <h1
            style={{color: 'white', textAlign: 'center'}}>The Moon Awaits</h1>
            <p
            style={{color: 'white', textAlign: 'center'}}>Are you ready to listen?</p>
            {/* <div className='hero-btns'>

               <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>LEARN MORE</Button> 
            </div> */}
        </div>
    )
}

export default HeroSection
