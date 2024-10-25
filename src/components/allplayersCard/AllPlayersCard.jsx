import { useEffect, useState } from "react";
import SinglePlayerCard from "../SinglePlayerCard/SinglePlayerCard";


const AllPlayersCard = () => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch("Players.json")
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            
            {
                players.map((player,idx) => <SinglePlayerCard key={idx} player={player}></SinglePlayerCard>)
            }
        </div>
    );
};

export default AllPlayersCard;