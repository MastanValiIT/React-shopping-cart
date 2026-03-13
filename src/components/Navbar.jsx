import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <header className='header'>
            <div className="left">
                <h1>IVAP</h1>
                <input type="search"
                 placeholder='Search...' 
                 />
            </div>
            <div className="middle">
                <ul>
                    <Link to="/" className='link'>
                    <li>Home</li>
                    </Link>
                    
                    <li>About us</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="right">
                <a href="#">SignUp/</a>
                <a href="#">SignIn</a>
                <button>Cart</button>
            </div>
        </header>
        <div className='sub-header'>
            <ul>{
                <>              
                <Link to="/ac" className='link'>
                <li>Ac</li>
                </Link>

                <Link to="/book" className='link'>
                <li>Books</li>
                </Link>

                <Link to="/computer" className='link'>
                <li>Computers</li>
                </Link>

                <Link to="/fridge" className='link'>
                 <li>Fridge</li>
                </Link>

                <Link to="/furniture" className='link'>
                <li>Furniture</li>
                </Link>

                <Link to="/kitchen" className='link'>
                <li>Kitchen</li>
                </Link>

                <li>Landing</li>

                <Link to="/man" className='link'>
                <li>MenWear</li>
                </Link>

                <Link to="/woman" className='link'>
                <li>WomanWear</li>
                </Link>

                <Link to="/mobile" className='link'>
                <li>Mobiles</li>
                </Link>

                <li>NeWMobile</li>

                <Link to="/speaker" className='link'>
                <li>Speakers</li>
                </Link>

                <Link to="/tv" className='link'>
                <li>TV</li>
                </Link>

                <Link to="/watch" className='link'>
                <li>Watch</li>
                </Link>
                </>  
                
            }  
            
            </ul>
        </div>
    </>
  )
}

export default Navbar