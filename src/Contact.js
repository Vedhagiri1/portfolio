import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import whatsapp from './images/whatsapp.svg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';


class Contact extends React.Component{
    render(){
    return(
        <div>
            <Home />
            
            <div className='hidden lg:flex ml-12 mt-12'>
                <div className='whatsapp'><a href='https://wa.me/7603905902'><img src={whatsapp} alt='whatsapp' className='lg:w-32 bg-green-400 rounded-3xl ml-64 mt-48 ' /></a>
                <h1 className='ml-72'>whatsapp</h1>
                </div>
                <div className='whatsapp'><a href='https://www.linkedin.com/in/vedha-giri-629374240'><img src={linkedin} alt='linked in' className='w-32  rounded-3xl ml-48 mt-48' /></a>
                <h1 className='ml-56'>Linkedin</h1>
                </div>
                <div className='whatsapp'><a href='https://github.com/Vedhagiri1'><img src={github} alt='github' className='w-32  ml-48 mt-48' /></a>
                <h1 className='ml-56'>GitHub</h1>
                </div>
                </div>
                <div>
                <div className='lg:hidden flex ml-2 mt-32'>
                <div className='whatsapp'><a href='https://wa.me/7603905902'><img src={whatsapp} alt='whatsapp' className='w-12 ml-2 bg-green-400 rounded-lg   ' /></a>
                <h1 className='ml-2'>whatsapp</h1>
                </div>
                <div className='whatsapp'><a href='https://www.linkedin.com/in/vedha-giri-629374240'><img src={linkedin} alt='linked in' className='w-12  rounded-lg ml-6 ' /></a>
                <h1 className='ml-6'>Linkedin</h1>
                </div>
                <div className='whatsapp'><a href='https://github.com/Vedhagiri1'><img src={github} alt='github' className='w-12  ml-6  ' /></a>
                <h1 className='ml-6'>GitHub</h1>
                </div>
                </div>
            </div>
        </div>
       )
       }
    }
    export default Contact;