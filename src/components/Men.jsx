import React from 'react'
import { menData } from '../data/men'
const Men = () => {
  const firstFive = menData.slice(0,5);
   return (
     <>
     <h1 className='title'>MenWear</h1>
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

export default Men