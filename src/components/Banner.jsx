import React from 'react'
import SpeakerPage from '../pages/SpeakerPage';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='banner'>
        <Link to="/speaker" className='link'>
        <img src="/assets/banner1.jpg" alt="banner" />
        </Link>
        
    </div>
  )
}

export default Banner