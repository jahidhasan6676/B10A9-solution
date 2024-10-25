
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import AvailableContainer from './Components/availableContainer/AvailableContainer'
import { useState } from 'react'

function App() {

  const [isActive, setIsActive] = useState({
    available: true

  });

  const handleIsActive = (status) =>{
    if(status === 'available'){
      setIsActive({
        available:true
      })
    }else{
      setIsActive({
        available:false
      })
    }
  }
 

  return (
    <>
      
     <div className='w-11/12 lg:w-10/12 mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
     </div>
     <div className='w-11/12 lg:w-10/12 mx-auto mt-10'>
      <AvailableContainer isActive={isActive} handleIsActive={handleIsActive}></AvailableContainer>
      </div>
     <div className='mt-[200px]'>
     <Footer></Footer>
     </div>
      
      
    </>
  )
}

export default App
