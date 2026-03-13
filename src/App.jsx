
import './App.css'
import FridgePage from './pages/FridgePage'
import AcPage from './pages/acPage';
import BooksPage from './pages/BooksPage';
import ComputerPage from './pages/ComputerPage';
import FurniturePage from './pages/FurniturePage';
import KitchenPage from './pages/KitchenPage';
import MenPage from './pages/MenPage';
import WomanPage from './pages/WomanPage';
import MobilePage from './pages/MobilePage';
import SpeakerPage from './pages/SpeakerPage';
import TVPage from './pages/TVPage';
import WatchPage from './pages/WatchPage';
import LandingPage from './pages/LandingPage'
import { Route,Routes } from 'react-router-dom';
import AcSingle from './singlePages/AcSingle';
import BookSingle from './singlePages/BookSingle';
import ComputerSingle from './singlePages/ComputersSingle';
import FridgeSingle from './singlePages/FridgeSingle';
import FurnitureSingle from './singlePages/FurnitureSingle';
import KitchenSingle from './singlePages/KitchenSingle';
import MenSingle from './singlePages/MenSingle';
import WomanSingle from './singlePages/WomanSingle';
import MobileSingle from './singlePages/MobileSingle';
import SpeakerSingle from './singlePages/SpeakerSingle';
import TVSingle from './singlePages/TVSingle';
import WatchSingle from './singlePages/WatchSingle';
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element = {<LandingPage/>}/>
      <Route path='ac'element={<AcPage/>}/>
      <Route path='book' element={<BooksPage/>}/>
      <Route path='computer' element={<ComputerPage/>}/>
      <Route path='fridge' element={<FridgePage/>}/>
      <Route path='furniture' element = {<FurniturePage/>}/>
      <Route path='kitchen'element={<KitchenPage/>}/>
      <Route path='man' element={<MenPage/>}/>
      <Route path='woman' element={<WomanPage/>}/>
      <Route path='mobile' element={<MobilePage/>}/>
      <Route path='speaker' element={<SpeakerPage/>}/>
      <Route path='tv' element={<TVPage/>}/>
      <Route path='watch' element={<WatchPage/>}/>
      <Route path = 'ac/:id' element={<AcSingle/>}/>
      <Route path='book/:id' element={<BookSingle/>}/>
      <Route path='computer/:id' element={<ComputerSingle/>}/>
      <Route path='fridge/:id' element={<FridgeSingle/>}/>
      <Route path='furniture/:id' element = {<FurnitureSingle/>}/>
      <Route path='kitchen/:id'element={<KitchenSingle/>}/>
      <Route path='man/:id' element={<MenSingle/>}/>
      <Route path='woman/:id' element={<WomanSingle/>}/>
      <Route path='mobile/:id' element={<MobileSingle/>}/>
      <Route path='speaker/:id' element={<SpeakerSingle/>}/>
      <Route path='tv/:id' element={<TVSingle/>}/>
      <Route path='watch/:id' element={<WatchSingle/>}/>
    </Routes>


    
    </>
  )
}

export default App
