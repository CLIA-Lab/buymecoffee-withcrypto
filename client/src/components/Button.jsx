const Button = (props) => {
    return (
        <div className='flex justify-end w-[95%]'>
        
            <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'>{props.text}</button>
                            
        </div>
    );
}
export default Button;