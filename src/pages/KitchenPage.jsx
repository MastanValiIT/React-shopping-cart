import React from 'react'
import { kitchenData } from '../data/kitchen';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const KitchenPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
           kitchenData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage