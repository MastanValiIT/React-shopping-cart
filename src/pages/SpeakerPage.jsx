import React from 'react'
import { speakerData } from '../data/speaker';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const SpeakerPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            speakerData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                       <Link to={`/speaker/${item.id}`}>
                        <img src={item.image} className='itemImg'/>
                        </Link>
                        {item.product}<br />
                        {item.price} 
                    </div>
                )
            })
        }
    </div>
    </>
  )
}
export default SpeakerPage