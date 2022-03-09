/*
const Button = (props) => {
    return (
        <div className='flex justify-end w-[95%]'>
        
            <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'>{props.text}</button>
                            
        </div>
    );
}
export default Button;
*/
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Copy',
        };
    }
    render(){
        return(
            <div className='flex justify-end w-[95%]'>
        
                <button className='border-none rounded-lg mt-3 text-lg w-[5rem] h-[2rem] bg-sky-500/75 text-white'
                onClick={() => this.setState({value: 'Copied'})}
                >{this.state.value}</button>
                            
            </div>
        );
    }
}
export default Button;