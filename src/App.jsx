
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import AvailableContainer from './Components/availableContainer/AvailableContainer'
import { useState } from 'react'

function App() {
  
  // toggle state
  const [isActive, setIsActive] = useState({
    available: true
  });
  // coin claim state
  const [coins,setCoins] = useState(0);

  // coin mainus
  const handleDecrementCoin = (player) =>{
    setCoins(coins - player.price)
  }
  // handle increment coin
  const handleIncrementCoin = (coin) =>{
    setCoins(coins + coin.price)
  }
  // claim coin handle
  const handleClamCoin = (coin) =>{

    setCoins(coins + coin)
  }
  
  // toggle handle
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
      <Navbar coins={coins}></Navbar>
      <Banner handleClamCoin={handleClamCoin}></Banner>
     </div>
     <div className='w-11/12 lg:w-10/12 mx-auto mt-10'>
      <AvailableContainer isActive={isActive} handleIsActive={handleIsActive} handleDecrementCoin={handleDecrementCoin} handleIncrementCoin={handleIncrementCoin}></AvailableContainer>
      </div>
     <div className='mt-[200px]'>
     <Footer></Footer>
     </div>
      
      
    </>
  )
}

export default App
