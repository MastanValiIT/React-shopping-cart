import React from 'react'
import { furnitureData } from '../data/furniture';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const FurniturePage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            furnitureData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/furniture/${item.id}`}>
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

export default FurniturePage