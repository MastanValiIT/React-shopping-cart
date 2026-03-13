import React from 'react'
import { fridgeData } from '../data/fridge'
const Fridge = () => {
   const firstFive = fridgeData.slice(0,5);
    return (
      <>
      <h1 className='title'>Fridge</h1>
          <div className='proSection'>
              {
              firstFive.map((item)=>{
                  return(
                      <div className='imgBox' key={item.id}>
                          <img src={item.image} alt={item.product} className='proImg'/>
                      </div>
                  )
              })
              }
          </div>
      </>
    )
}

export default Fridge