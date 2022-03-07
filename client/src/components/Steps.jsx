const Steps = (props) => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    return (
        <>
            <p className='font-bold pt-6'>{props.stepTitle}</p>
            <p className='pt-1'>{props.stepInfo}</p>
                   
            <div className={`${gradient} w-[95%] h-[4rem] mt-4 rounded-lg select-all hover:overflow-x-scroll overflow-y-hidden`}>
                <pre className="text-white text-lg pt-4">{props.preText}</pre>
            </div>
        </>
    );
}
export default Steps;
