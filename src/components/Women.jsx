import React from 'react'
import { womanData } from '../data/woman'
const Women = () => {
  const firstFive = womanData.slice(0,5);
     return (
       <>
       <h1 className='title'>WomanWear</h1>
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

export default Women