import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Steps extends React.Component{
    constructor(props){
        super(props);
       
        var step = ``;
       
        if(this.props.stepTitle == "Step 1"){
            step = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>`;
        }else if(this.props.stepTitle == "Step 2"){
            step = `<div class="d-grid gap-2 d-md-flex justify-content-md-end fixed-bottom">
    <button class="rounded-circle" style="outline: none; border: none;" data-bs-toggle="modal" data-bs-target="#ModalFormCrypto" data-bs-whatever="@mdo">
        <img type="button" src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" class="img-thumbnail rounded-circle mx-auto" style="width: 4rem ; height: 4rem;" alt="NothingToShow">
    </button>
</div>`;
        }else if(this.props.stepTitle == "Step 3"){
            step= `<div class="modal fade" id="ModalFormCrypto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="container text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png?20201112074605" class="rounded-circle img-thumbnail" style="width: 20% !important; height: 20% !important;" alt="">
                    <h5 class="modal-title" id="exampleModalLabel">Send Your Crypto</h5>
                </div>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Adress to Send: </label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Amount to send:</label>
                        <input type="number" class="form-control" id="recipient-name">
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select your cryptocurrency</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Tron</a></li>
                            <li><a class="dropdown-item" href="#">Bitcoin</a></li>
                            <li><a class="dropdown-item" href="#">Etherium</a></li>
                        </ul>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send cryptocurrency</button>
            </div>
        </div>
    </div>
</div>`;
        }else if(this.props.stepTitle == "Step 4"){
            step = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>`;
        }
        this.state = {
            preText: step,
            copied: false,
            value: 'Copy'
          };
    }
    render(){
        const gradient = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
        return(
            <>
                <p className='font-bold pt-6'>{this.props.stepTitle}</p>
                <p className='pt-1'>{this.props.stepInfo}</p>
                    
                <div className={`${gradient} w-[95%]  mt-4 rounded-lg select-all hover:overflow-x-scroll overflow-y-hidden`}>
                    <pre className="text-white text-lg py-2">{this.state.preText}</pre>
                </div>
                <div className='flex justify-end w-[95%]'>
                    <CopyToClipboard text={this.state.preText}
                    onCopy={() => this.setState({copied: true})}>
                        <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'
                        onClick={() => this.setState({value: 'Copied'})}
                        >{this.state.value}</button>             
                    </CopyToClipboard>
                </div>
            </>
        );
    }
}
export default Steps;