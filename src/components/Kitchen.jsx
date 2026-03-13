import React from 'react'
import { kitchenData } from '../data/kitchen'
const Kitchen = () => {
   const firstFive = kitchenData.slice(0,5);
    return (
      <>
      <h1 className='title'>Kitchen</h1>
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

export default Kitchen