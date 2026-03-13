import React from 'react'
import { tvData } from '../data/tv'
const TV = () => {
  const firstFive = tvData.slice(0,5);
     return (
       <>
       <h1 className='title'>TV's</h1>
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

export default TV