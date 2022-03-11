/* 
    DOCUMENTATION:

    This component has the functionality of calling the element that is defined in the file called Steps.jsx that is inside the folder called Component and passing it two props called "stepTitle" and "stepInfo" so that all the HTML code that appears on the screen appears. the user must copy for the modal component to appear.
*/
import React, {useState} from 'react';
import { Steps } from '../Components';
import ModalComponentImg from '../../images/ModalComponentImg.png';

const CodeModalComponent = () => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
   
    

    return (
        <div className='container mx-auto mt-[2rem]'>
             <h1 className="text-3xl text-center font-bold pt-[5rem]">How to use our component?</h1>
            <div className="flex mobile-S-Laptop:flex-col justify-center py-[5rem] mobile-S-Laptop: px-[1.50rem]">
               <div className="laptop-4k:w-1/2 laptop-4k:h-[20rem flex justify-center">
                    <img src={ModalComponentImg} className='laptop-4k:w-[40rem] laptop-4k:h-[25rem] mobile-S-Laptop:w-[100%] mobile-S-Laptop:h-auto' alt="modal component code image" />
               </div>
               <div className='laptop-4k:w-1/2 overflow-x-hidden'>
                    <h1 className="text-3xl mobile-S-Laptop:pt-[4rem]">Guide to start using us</h1>
                    <p className='text-lg pt-6'>Our component is designed to be used in any browser and any website that our users want. For this we use Bootstrap 5, in this way we ensure compatibility with multiple browsers.</p>                   
                    <div className='laptop-4k:h-[15rem] mobile-S-Laptop:h-[17rem] overflow-y-scroll overflow-x-hidden'>                   
                    {/* Step 1 */}
                    <Steps 
                        stepTitle='Step 1'
                        stepInfo='You must add the Bootstrap link to your html between the "&lt;head/&gt;" tags.'
                    />
                    {/* Step 2 */}
                    <Steps 
                        stepTitle='Step 2'
                        stepInfo='Now you need to create the button that will allow you to display the modal component.'
                    />            
                    {/* Step 3 */}
                    <Steps 
                        stepTitle='Step 3'
                        stepInfo='Now you need to create the modal component that will allow you to display the modal screen.'
                    /> 
                    {/* Step 4 */}
                    <Steps 
                        stepTitle='Step 4'
                        stepInfo='You need to copy the script that will give functionality to the button whose function is to make the modal screen appear.'
                    />                  
                </div>                 
            </div>                               
        </div>                    
    </div>
);
}
export default CodeModalComponent;