import React from 'react'
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const AcPage = () => {
  return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            acData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/ac/${item.id}`}>
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

export default AcPage