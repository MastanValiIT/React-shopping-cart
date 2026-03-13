import React from 'react'
import {watchData} from '../data/watch'
const Watch = () => {
 const firstFive = watchData.slice(0,5);
    return (
      <>
      <h1 className='title'>Watch</h1>
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

export default Watch