import React from 'react'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {
    const firstFive = mobileData.slice(0,5);
  return (
    <>
    <h1 className='title'>Mobiles</h1>
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

export default Mobiles