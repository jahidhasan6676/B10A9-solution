import PropTypes from "prop-types"

const SinglePlayerCard = ({player,handleChoosePlayer}) => {
    const {image,name,country,role,battingType,bowlingType,price} = player;
    // console.log(player)
    return (
        <div className="border rounded-md p-3">
            {/* img div */}
            <div><img className="h-[250px] w-full rounded-md" src={image}/></div>
            {/* name div */}
            <div className="flex items-center gap-4 mt-3">
                <p><i className="fa-solid fa-user"></i></p>
                <h4 className="font-semibold ">{name}</h4>
            </div>
            {/* country and role */}
            <div className="flex justify-between items-center mt-2 mb-2"> 
                <div className="flex items-center gap-4">
                <p className="text-gray-500"><i className="fa-solid fa-flag"></i></p>
                <p className="text-sm font-normal text-gray-500">{country}</p>
                </div>
                <div>
                    <p className="bg-gray-300 px-2 py-1 rounded-md text-sm font-medium">{role}</p>
                </div>
            </div>
            <hr />   
            <h5 className="font-semibold mt-2 text-sm">Rating</h5> 
            {/* batting and bowling type */}
            <div className="flex justify-between mt-2">
                <p className="font-medium text-sm">{battingType}</p>
                <p className="font-medium text-gray-500 text-sm">{bowlingType}</p>
            </div>  
                 {/* price and choose btn */}
                 <div className="flex justify-between items-center mt-2">
                    <p className="text-sm font-medium">Price: ${price}</p>
                    <button onClick={()=>handleChoosePlayer(player)} className="text-sm font-normal border px-2 py-1 rounded-md text-gray-500 hover:bg-[#E7FE29] hover:text-black">Choose Player</button>
                 </div>
        </div>
    );
};

SinglePlayerCard.propTypes ={
    player:PropTypes.object.isRequired,
    handleChoosePlayer:PropTypes.func
}

export default SinglePlayerCard;