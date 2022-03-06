/* 
DOCUMENTATION
THIS MODULE WAS CREATED BY OSCAR ALEJANDRO NAVARRO AVILES.
THE OBJECTIVE OF THIS FILE IS TO CREATE A COMPONENT THAT ALLOWS RENDERING AN IMAGE WITH A TITLE UNDER IT AND A TEXT UNDER IT, THIS COMPONENT ALLOWS IT TO BE CALLED SEVERAL TIMES AND TO MODIFY ITS CONTENT THANKS TO THE USE OF "PROPS IN REACT" 

*/
import { FaRocketchat, FaTabletAlt, FaSellcast } from 'react-icons/fa';
const Techno = (props) => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
   
    var iconfa = <FaRocketchat fontSize={30} className="text-white"/>;

    if(props.icon == 'FaRocketchat'){
        var iconfa = <FaRocketchat fontSize={30} className="text-white"/>;
    }else if(props.icon == 'FaTabletAlt'){
        var iconfa = <FaTabletAlt fontSize={30} className="text-white"/>;
    }else{
        var iconfa = <FaSellcast fontSize={30} className="text-white"/>;
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className={`${gradient} my-4 flex items-center justify-center w-[5rem] h-[5rem] rounded-full cursor-pointer`}>
                    {iconfa}
                </div>
            </div>
            <h1 className='text-2xl text-center font-bold'>{props.title}</h1>
            <p className='text-lg py-4 px-[2rem]'>{props.text}</p>
            <a href='#' className='cursor-pointer px-[2rem]'>Learn more...</a>  
        </div>
    );
}
export default Techno;