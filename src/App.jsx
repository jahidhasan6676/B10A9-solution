
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      
     <div className='w-11/12 lg:w-10/12 mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
     </div>
     <div className='mt-[200px]'>
     <Footer></Footer>
     </div>
      
      
    </>
  )
}

export default App
