import { useEffect, useState } from "react";
import SinglePlayerCard from "../SinglePlayerCard/SinglePlayerCard";
import PropTypes from 'prop-types'


const AllPlayersCard = ({ handleChoosePlayer}) => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch("Players.json")
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className="">
            <div className="mt-[-40px] mb-10">
                <h4 className="text-xl font-semibold">Available Players</h4>
            </div>
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                players.map((player,idx) => <SinglePlayerCard key={idx} player={player} handleChoosePlayer={handleChoosePlayer}></SinglePlayerCard>)
            }
           </div>
        </div>
    );
};

AllPlayersCard.propTypes ={
    handleChoosePlayer:PropTypes.func
}

export default AllPlayersCard;