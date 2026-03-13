import React from 'react'
import Navbar from '../components/Navbar';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';
const MobilePage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            mobileData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/mobile/${item.id}`}>
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

export default MobilePage