import cricket from '../../assets/banner-main.png'
import PropTypes from 'prop-types'

const Banner = ({handleClamCoin}) => {
    return (
        <div className="mt-3" 
            style={{
                backgroundImage: `url('https://i.ibb.co/zPkYPXv/bg-shadow.png')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: 'black',
                borderRadius: '12px'
            }}
        >
            <div className='flex flex-col  items-center space-y-5 py-12'>
                <div className=''>
                    <img src={cricket}/>
                </div>
                <div className='text-center space-y-5'>
                    <div className='space-y-4'>
                    <h1 className='text-xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-sm font-normal  text-white'>Beyond Boundaries Beyond Limits</p>
                    </div>
                    <div className='border border-[#E7FE29] p-1 w-[159px] rounded-xl ml-[163px]'>
                        <button onClick={()=>handleClamCoin(500000)} className='bg-[#E7FE29] py-2 px-3 rounded-md text-sm font-medium '>Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

Banner.propTypes ={
    handleClamCoin:PropTypes.func
}

export default Banner;