import profile from '../../assets/logo.png';
import PropTypes from 'prop-types'
const Navbar = ({coins}) => {
    return (
        <div className='flex  justify-between items-center py-4 sticky  top-0   bg-[#FBFBFB]'>
            {/* logo */}
            <div>
                <img className='w-16 h-16' src={profile}  />
            </div>
            {/* all li */}
            <div>
                <ul className='flex items-center gap-5 font-medium'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedule</li>
                    <button className='flex items-center gap-1 border-2 p-2 rounded-lg font-medium'><span> {coins} </span>  coin <img className='w-6 h-6' src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"/></button>
                </ul>

            </div>
        </div>
    );
};

Navbar.propTypes ={
    coins:PropTypes.number
}

export default Navbar;