import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {

      const firstFive = computerData.slice(0,5)

  return (
    <>
    <h1 className='title'>Computers</h1>
        <div className='proSection'>
            {
                firstFive.map((item)=>{
                    return(
                        <div className="imgBox" key={item.id}>
                            <img src={item.image} alt={item.product} className='proImg'/>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Computers