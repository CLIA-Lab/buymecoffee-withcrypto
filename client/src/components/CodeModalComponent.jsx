import ModalComponentImg from '../../images/ModalComponentImg.png';

const CodeModalComponent = () => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    return (
        <div className='container mx-auto mt-[2rem]'>
             <h1 className="text-3xl text-center pt-[5rem]">How to use our component?</h1>
            <div className="flex justify-center  py-[5rem]">
               <div className="w-1/2 h-[20rem flex justify-center">
                    <img src={ModalComponentImg} className='w-[40rem] h-[25rem]' alt="modal component code image" />
               </div>
               <div className="w-1/2 h-[20rem">
                    <h1 className="text-3xl ">Guide to start using us</h1>
                    <p className='text-lg pt-6'>Our component is designed to be used in any browser and any website that our users want. For this we use Bootstrap 5, in this way we ensure compatibility with multiple browsers.</p>
                    <p className='font-bold pt-6'>Step 1:</p>
                    <p className='pt-1'>You must add the Bootstrap link to your html between the "&lt;head/&gt;" tags</p>
                    <div className=''>
                        <div className={`${gradient} w-[40rem] h-[4rem] mt-4 rounded-lg select-all hover:overflow-x-auto overflow-y-hidden `}>
                        <pre className="text-white text-lg pt-1">                       
                            &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"&gt;                            
                        </pre>
                        </div>
                    </div>
                   
                  
               </div>                               
            </div>                    
        </div>
    );
}
export default CodeModalComponent;