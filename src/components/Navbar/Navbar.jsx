import profile from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4 '>
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
                    <p className='flex items-center gap-1 border-2 p-2 rounded-lg font-medium'><span>0 </span>  coin <img className='w-6 h-6' src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"/></p>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;