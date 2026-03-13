import React from 'react'
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const WomanPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            womanData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/woman/${item.id}`}>
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

export default WomanPage