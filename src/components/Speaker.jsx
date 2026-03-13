import React from 'react'
import { speakerData } from '../data/speaker'
const Speaker = () => {
   const firstFive = speakerData.slice(0,5);
      return (
        <>
        <h1 className='title'>Speakers</h1>
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

export default Speaker