import React from 'react'
import home_hero from '../assets/home_hero.png'
const Banner = () => {
  return (
    
    <div className='banner'>
        
        <div className='banner-left'>
            <h1>Create your website today with <span>ZONE</span></h1>
            <p>The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.</p>
            <button className='btn'>Figma workspace</button>
        </div>

        <div className='banner-right'>
          <img src={home_hero} alt='banner'/>
        </div>
    </div>
  )
}

export default Banner