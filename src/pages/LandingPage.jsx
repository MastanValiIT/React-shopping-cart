import React from 'react'
import Navbar from '../components/Navbar'
import Computers from '../components/Computers'
import Mobiles from '../components/Mobiles'
import AC from '../components/AC'
import Books from '../components/Books'
import Fridge from '../components/Fridge'
import Furniture from '../components/Furniture'
import Kitchen from '../components/Kitchen'
import Men from '../components/Men'
import Speaker from '../components/Speaker'
import Women from '../components/Women'
import TV from '../components/TV'
import Watch from '../components/Watch'
import Banner from '../components/Banner'


const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
     <AC/>
     <Books/>
     <Computers/>
     <Fridge/>
     <Furniture/>
     <Kitchen/>
     <Men/>
     <Women/>
     <Mobiles/>
     <Speaker/>
     <TV/>
     <Watch/> 
    </>
  )
}

export default LandingPage