import React from 'react'
import { booksData } from '../data/books'
const Books = () => {
  const firstFive = booksData.slice(0,5)
    return (
      <>
      <h1 className='title'>Books</h1>
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

export default Books