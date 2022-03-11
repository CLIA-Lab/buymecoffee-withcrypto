/*
  DOCUMENTATION :

  This is the second component to display on the webpage, it contains a single button that has no functionality yet.
*/
const Welcome = () => {
  const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    return (
      <div className={`flex flex-col justify-between bg-no-repeatzz rounded-b-[20rem] bg-top ${gradient}  h-[27.50rem]`}>
          <div className='container mx-auto'>
            <div className='flex justify-center pt-[18rem]'>
                <button className='border-none rounded-lg text-2xl w-40 h-14 bg-sky-500/75 text-white'>Get Started</button>
            </div>
        </div>   
      </div>
    );
}
export default Welcome;