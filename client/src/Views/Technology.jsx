import { FaRocketchat, FaTabletAlt, FaSellcast } from 'react-icons/fa';

import {Techno} from '../Components';

const Technology = () => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center font-bold pt-[8rem]'>Where You Can Use Your Comoponent</h1>

            <div className="flex justify-center mobile-S-Laptop:flex-wrap mt-[3rem]">
                <Techno 
                icon='FaRocketchat'
                title='Social Transactions'
                text='Add and share your Component URL on social page for trust in social transactions'
                />
                <Techno 
                icon='FaTabletAlt'
                title='Direct Payments'
                text='Use a Component Url for adding trust in direct chat conversations that are transactional'                
                />
                <Techno 
                icon='FaSellcast'
                title='Marketplace Transactions'
                text='Add and share on marketplace for identity, reputation, and trust in new transactions'                
                />                
            </div>
        </div>
      
    );
}
export default Technology;