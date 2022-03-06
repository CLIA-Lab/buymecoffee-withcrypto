import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import ModalComponentImg from '../../images/ModalComponentImg.png';

const CodeModalComponent = () => {
    const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    const [value, setValue] = useState('');
    const [copied, setCopied] = useState(false);
    

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
                    {/*
                    
                    Step 1 
                    
                    */}
                    <p className='font-bold pt-6'>Step 1:</p>
                    <p className='pt-1'>You must add the Bootstrap link to your html between the "&lt;head/&gt;" tags.</p>
                   
                    <div className={`${gradient} w-[95%] h-[4rem] mt-4 rounded-lg select-all hover:overflow-x-scroll overflow-y-hidden`}>
                        <pre className="text-white text-lg pt-4" value={value} onSelect={({target: value}) => setValue(value)}>                       
                            &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"&gt;                            
                        </pre>
                    </div>
                    <div className='flex justify-end w-[95%]'>
                    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                        <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'>Copy</button>
                    </CopyToClipboard>                    
                    </div>
                    

                        {/* 
                        
                        Step 2
                        
                        */}
                        <p className='font-bold pt-6'>Step 2:</p>
                        <p className='pt-1'>Now you need to create the button that will allow you to display the modal component.</p>
                        <div className={`${gradient} w-[95%] mt-4 rounded-lg select-all hover:overflow-x-scroll`}>
                        <pre className="text-white text-lg pt-1" >                       
                            &lt;div class="d-grid gap-2 d-md-flex justify-content-md-end fixed-bottom"&gt; 
                            <br/>
                            <span className='pl-8'>&lt;</span>button class="rounded-circle" style="outline: none; border: none;" data-bs-toggle="modal" data-bs-target="#ModalFormCrypto" data-bs-whatever="@mdo"<samp>&gt;</samp>
                            <br/>
                            <samp className='pl-[5rem]'>&lt;</samp>img type="button" src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" class="img-thumbnail rounded-circle mx-auto" style="width: 4rem ; height: 4rem;" alt="NothingToShow"<span>&gt;</span>
                            <br/>
                            <span className='pl-8'>&lt;</span>/button<span>&gt;</span>  
                            <br/>
                            <span>&lt;</span>/div<samp>&gt;</samp>                   
                        </pre>
                        </div>
                        <div className='flex justify-end w-[95%]'>
                            <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'>Copy</button>
                        </div>
                        {/*
                        
                        Step 3
                        
                        */}
                        <p className='font-bold pt-6'>Step 3:</p>
                        <p className='pt-1'>Now you need to create the modal component that will allow you to display the modal screen.</p>
                        
                        <div className={`${gradient} w-[95%] mt-4 rounded-lg select-all hover:overflow-x-scroll`}>
                        <pre className="text-white text-lg pt-1">
                            <samp>&lt;</samp>div class="modal fade" id="ModalFormCrypto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"<span>&gt;</span>      
                            <br/>
                            
                            <samp>&lt;</samp>div class="modal-dialog"<span>&gt;</span><br/>
                                <span className='pl-[2rem]'>&lt;</span>div class="modal-content"<span>&gt;</span><br/>
                                <span className='pl-[3rem]'>&lt;</span>div class="modal-header"<span>&gt;</span><br/>
                                    <span className='pl-[4rem]'>&lt;</span>div class="container text-center"<samp>&gt;</samp><br/>
                                        <span className='pl-[6rem]'>&lt;</span>img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png?20201112074605" class="rounded-circle img-thumbnail" style="width: 20% !important; height: 20% !important;" alt=""<span>&gt;</span><br/>                
                                        <span className='pl-[6rem]'>&lt;</span>h5 class="modal-title" id="exampleModalLabel"<span>&gt;</span>Send Your Crypto<span>&lt;</span>/h5<span>&gt;</span><br/>
                                    <span className='pl-[4rem]'>&lt;</span>/div<span>&gt;</span><br/>
                                <span className='pl-[3rem]'>&lt;</span>/div<span>&gt;</span><br/>
                                <span className='pl-[3rem]'>&lt;</span>div class="modal-body"<span>&gt;</span><br/>
                                <span className='pl-[4rem]'>&lt;</span>form<span>&gt;</span><br/>
                                <span className='pl-[6rem]'>&lt;</span>div class="mb-3"<span>&gt;</span><br/>
                                    <span className='pl-[8rem]'>&lt;</span>label for="recipient-name" class="col-form-label"<span>&gt;</span>Adress to Send: <span>&lt;</span>/label<span>&gt;</span><br/>
                                        <span className='pl-[8rem]'>&lt;</span>input type="text" class="form-control" id="recipient-name"<span>&gt;</span><br/>
                                    <span className='pl-[6rem]'>&lt;</span>/div<span>&gt;</span><br/>
                                    <span className='pl-[6rem]'>&lt;</span>div class="mb-3"<span>&gt;</span><br/>
                                        <span className='pl-[8rem]'>&lt;</span>label for="recipient-name" class="col-form-label"<span>&gt;</span>
                                            Amount to send:<span>&lt;</span>/label<span>&gt;</span><br/>
                                        <span className='pl-[8rem]'>&lt;</span>input type="number" class="form-control" id="recipient-name"<span>&gt;</span><br/>
                                    <span className='pl-[6rem]'>&lt;</span>/div<span>&gt;</span><br/>
                                    <span className='pl-[6rem]'>&lt;</span>div class="dropdown"<span>&gt;</span><br/>
                                        <span className='pl-[8rem]'>&lt;</span>button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"<span>&gt;</span>
                                            Select your cryptocurrency
                                        <span>&lt;</span>/button<span>&gt;</span><br/>
                                        <span className='pl-[8rem]'>&lt;</span>ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"<span>&gt;</span><br/>
                                            <span className='pl-[9rem]'>&lt;</span>li<span>&gt;</span><span>&lt;</span>a class="dropdown-item" href="#"<span>&gt;</span>Tron<span>&lt;</span>/a<span>&gt;</span><span>&lt;</span>/li<span>&gt;</span><br/>
                                            <span className='pl-[9rem]'>&lt;</span>li<span>&gt;</span><span>&lt;</span>a class="dropdown-item" href="#"<span>&gt;</span>Bitcoin<span>&lt;</span>/a<span>&gt;</span><span>&lt;</span>/li<span>&gt;</span><br/>
                                            <span className='pl-[9rem]'>&lt;</span>li<span>&gt;</span><span>&lt;</span>a class="dropdown-item" href="#"<span>&gt;</span>Etherium<span>&lt;</span>/a<span>&gt;</span><span>&lt;</span>/li<span>&gt;</span><br/>
                                        <span className='pl-[8rem]'>&lt;</span>/ul<span>&gt;</span><br/>
                                    <span className='pl-[6rem]'>&lt;</span>/div<span>&gt;</span><br/>
                                    <span className='pl-[4rem]'>&lt;</span>/form<span>&gt;</span><br/>
                                <span className='pl-[3rem]'>&lt;</span>/div<span>&gt;</span><br/>
                                <span className='pl-[3rem]'>&lt;</span>div class="modal-footer"<span>&gt;</span><br/>
                                    <span className='pl-[4rem]'>&lt;</span>button type="button" class="btn btn-secondary" data-bs-dismiss="modal"<span>&gt;</span>Close<span>&lt;</span>/button<span>&gt;</span><br/>
                                    <span className='pl-[4rem]'>&lt;</span>button type="button" class="btn btn-primary"<span>&gt;</span>Send cryptocurrency<span>&lt;</span>/button<span>&gt;</span><br/>
                                <span className='pl-[3rem]'>&lt;</span>/div<span>&gt;</span><br/>
                              <span className='pl-[2rem]'>&lt;</span>/div<span>&gt;</span><br/>
                            <span>&lt;</span>/div<span>&gt;</span><br/>
                        </pre>
                    </div>
                    <div className='flex justify-end w-[95%]'>
                        <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'>Copy</button>
                    </div>
                    {/*
                        
                    Step 4
                        
                    */}
                    <p className='font-bold pt-6'>Step 4:</p>
                    <p className='pt-1'>You need to copy the script that will give functionality to the button whose function is to make the modal screen appear.</p>
                    <div className={`${gradient} w-[95%] h-[4rem] mt-4 rounded-lg select-all hover:overflow-x-scroll overflow-y-hidden`}>
                        <pre className="text-white text-lg pt-1">
                            <span>&lt;</span>script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"<span>&gt;</span><span>&lt;</span>/script<span>&gt;</span>                           
                        </pre>
                    </div>
                    <div className='flex justify-end w-[95%]'>
                        <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'>Copy</button>
                    </div>
                </div>                 
            </div>                               
        </div>                    
    </div>
);
}
export default CodeModalComponent;