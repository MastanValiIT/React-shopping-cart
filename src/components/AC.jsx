import React from 'react'
import { acData } from '../data/ac'
const AC = () => {
const firstFive = acData.slice(0,5)
  return (
    <>
    <h1 className='title'>AC</h1>
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

export default AC