import PropTypes from 'prop-types'

const SelectedPlayer = ({choosePlayer,handleRemoveCard,handleIsActive}) => {
    console.log(choosePlayer)
    return (
        <div>
            <h2 className='font-semibold mt-[-40px] mb-10'>Selected Player: (<span>{choosePlayer.length}</span>/6)</h2>
            <div className='space-y-2'>
                {
                    choosePlayer.map((p,index)=> {
                       return(
                        <div key={index} className='flex justify-between items-center border-2 rounded-md p-2 '>
                            <div className='flex items-center gap-3'>
                                <div><img className='w-20 h-16 rounded-lg' src={p.image}/></div>
                                <div className=''>
                                    <h5 className='font-medium'>{p.name}</h5>
                                    <p className='text-sm font-medium text-gray-500'>{p.battingType}</p>
                                </div>
                            </div>

                            <div><button onClick={()=>handleRemoveCard(p)}><i  className="fa-regular fa-trash-can "></i></button></div>
                        </div>
                       )
                    })
                }
            </div>
            <div className='border w-[151px] p-1 rounded-xl mt-5'>
            <button onClick={()=>handleIsActive('available')} className='bg-[#E7FE29] px-3 py-2 rounded-md text-sm font-medium'>Add More Player</button>
            </div>
        </div>
    );
};


SelectedPlayer.propTypes ={
    choosePlayer:PropTypes.array.isRequired,
    handleRemoveCard:PropTypes.func,
    handleIsActive:PropTypes.func
}

export default SelectedPlayer;