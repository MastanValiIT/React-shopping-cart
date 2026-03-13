import React from 'react'
import { computerData } from '../data/computers';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
const ComputerSingle = () => {
    const {id} = useParams();
    const item = computerData.find((value) => value.id === id)
  return (
    <>
    <Navbar/>
    <div className='singlePage'>
         <div className='proLeft'>
            <img src={item.image}  />
        </div>
        <div className='proRight'>
            <h1>{item.product}</h1>
            <h3>{item.company}</h3>
            <h3>{item.model} Model</h3>
            <h4>{item.price}</h4>
            <p>{item.description}</p>
            <button>Add to Cart</button>
        </div>
    </div>
   
    </>
  )
}

export default ComputerSingle