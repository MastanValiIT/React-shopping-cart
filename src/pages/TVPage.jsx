import React from 'react'

import Navbar from '../components/Navbar';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';
const TVPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            tvData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                       <Link to={`/tv/${item.id}`}>
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

export default TVPage