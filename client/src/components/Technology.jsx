import { FaRocketchat, FaTabletAlt, FaSellcast } from 'react-icons/fa';

//FaRocketchat FaTabletAlt FaSellcast
const Technology = () => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center pt-[8rem]'>Where You Can Use Your Comoponent</h1>

            <div className="flex justify-center mobile-S-Laptop:flex-wrap mt-[3rem]">
                <div> 
                    <div className='flex justify-center'>
                        <div className={`${gradient} my-4 flex items-center justify-center w-[5rem] h-[5rem] rounded-full cursor-pointer`}>
                            <FaRocketchat fontSize={30} className='text-white'/>
                        </div>
                    </div>                  
                    
                    <h1 className='text-2xl pl-[2rem]'>Social Transactions</h1>
                    <p className='text-lg py-4 px-[2rem]'>Add and share your Component URL on social page for trust in social transactions</p>
                    <a href='#' className='cursor-pointer px-[2rem]'>Learn more...</a>
                </div>
                <div> 
                    <div className='flex justify-center'>
                        <div className={`${gradient} my-4 flex items-center justify-center w-[5rem] h-[5rem] rounded-full cursor-pointer`}>
                            <FaTabletAlt fontSize={30} className='text-white'/>
                        </div>
                    </div>                  
                    <h1 className='text-2xl pl-[2rem]'>Direct Payments</h1>
                    <p className='text-lg py-4 px-[2rem]'>Use a Component Url for adding trust in direct chat conversations that are transactional</p> 
                    <a href='#' className='cursor-pointer px-[2rem]'>Learn more...</a>         
                </div>
                <div> 
                    <div className='flex justify-center'>
                        <div className={`${gradient} my-4 flex items-center justify-center w-[5rem] h-[5rem] rounded-full cursor-pointer`}>
                            <FaSellcast fontSize={30} className='text-white'/>
                        </div>
                    </div>                  
                    <h1 className='text-2xl pl-[2rem]'>Marketplace Transactions</h1>
                    <p className='text-lg py-4 px-[2rem]'>Add and share on marketplace for identity, reputation, and trust in new transactions</p>
                    <a href='#' className='cursor-pointer px-[2rem]'>Learn more...</a>               
                </div>
            </div>
        </div>
      
    );
}
export default Technology;