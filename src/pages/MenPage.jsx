import React from 'react'
import { menData } from '../data/men';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const MenPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            menData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/man/${item.id}`}>
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

export default MenPage