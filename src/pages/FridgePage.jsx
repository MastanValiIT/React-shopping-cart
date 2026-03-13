import React from 'react'
import { fridgeData } from '../data/fridge';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const FridgePage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            fridgeData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/fridge/${item.id}`}>
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

export default FridgePage