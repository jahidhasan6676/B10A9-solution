import { useState } from "react";
import AllPlayersCard from "../allplayersCard/AllPlayersCard";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";
import PropTypes from "prop-types"

const AvailableContainer = ({handleIsActive,isActive,handleDecrementCoin,handleIncrementCoin}) => {
    // choose player state
    const [choosePlayer,setChoosePlayer] = useState([]);
    // handle choose player
    const handleChoosePlayer = (player) =>{
        const isExist = choosePlayer.find(p => p.playerId === player.playerId );
        if(!isExist){
            handleDecrementCoin(player);
            const newChoosePlayer = [...choosePlayer,player]
            setChoosePlayer(newChoosePlayer)
        }else{
            alert('This player already exist')
        }
        
    }

    // handle remove card 
    const handleRemoveCard = (id) =>{
        handleIncrementCoin(id);
        const remainingCard = choosePlayer.filter(p => p.playerId !== id.playerId);
        setChoosePlayer(remainingCard)
    }
  
    return (
        <div className="">
            <div className="flex justify-end gap-2">
               <button onClick={()=>handleIsActive('available')} className={`${isActive.available? 'active' : 'border px-2 rounded-md'}`}>Available</button>
               <button onClick={()=>handleIsActive('selected')} className={`${isActive.available? 'border px-2 rounded-md ' : 'active'}`}>Selected(<span>{choosePlayer.length}</span>)</button>
            </div>

            {isActive.available? <AllPlayersCard  handleChoosePlayer={ handleChoosePlayer}></AllPlayersCard> : <SelectedPlayer  choosePlayer={choosePlayer} handleRemoveCard={handleRemoveCard} handleIsActive={handleIsActive}></SelectedPlayer>}
            
        </div>
        
    );
};


AvailableContainer.propTypes ={
    handleIsActive:PropTypes.func.isRequired,
    isActive:PropTypes.object.isRequired,
    handleDecrementCoin:PropTypes.func,
    handleIncrementCoin:PropTypes.func
}
export default AvailableContainer;