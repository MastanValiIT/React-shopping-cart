import React from 'react'
import { watchData } from '../data/watch';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const WatchPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            watchData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                       <Link to={`/watch/${item.id}`}>
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

export default WatchPage