import React from 'react'
import { booksData } from '../data/books';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const BooksPage = () => {
   return (
    <>
    <Navbar/>
    <div className='itemSection'>
        {
            booksData.map((item)=>{
                return(
                    <div className='itemBox' key={item.id}>
                        <Link to={`/book/${item.id}`}>
                          <img src={item.image} className='itemImg'/>
                        </Link>
                    
                        {item.product}<br />
                        {item.price} 
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default BooksPage