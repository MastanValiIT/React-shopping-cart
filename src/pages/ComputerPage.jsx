import React from 'react'
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const ComputerPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            computerData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/computer/${item.id}`}>
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

export default ComputerPage