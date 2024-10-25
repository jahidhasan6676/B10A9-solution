import AllPlayersCard from "../allplayersCard/AllPlayersCard";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";
import PropTypes from "prop-types"

const AvailableContainer = ({handleIsActive,isActive}) => {
  
    return (
        <div className="">
            <div className="flex justify-between items-center">
            <div>
                <h4 className="text-xl font-semibold">Available Players</h4>
            </div>
            <div className="flex gap-2">
               <button onClick={()=>handleIsActive('available')} className={`${isActive.available? 'active' : 'border px-2 rounded-md'}`}>Available</button>
               <button onClick={()=>handleIsActive('selected')} className={`${isActive.available? 'border px-2 rounded-md ' : 'active'}`}>Selected(<span>0</span>)</button>

            </div>
            </div>

            {isActive.available? <AllPlayersCard></AllPlayersCard> : <SelectedPlayer></SelectedPlayer>}
        </div>
        
    );
};


AvailableContainer.propTypes ={
    handleIsActive:PropTypes.func.isRequired,
    isActive:PropTypes.object.isRequired
}
export default AvailableContainer;