import React from 'react'
import { furnitureData } from '../data/furniture'
const Furniture = () => {
   const firstFive = furnitureData.slice(0,5);
    return (
      <>
      <h1 className='title'>Furniture</h1>
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

export default Furniture