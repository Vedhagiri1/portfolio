import './App.css';
import React from 'react';
import Home from './App';
import pic from './images/pic.jpeg'

class Profile extends React.Component{
    render(){
    return(
        <div>
            <Home/>
            <div className='m-0 p-0'>
                <div className='ml-6'>
                <div className='md:hidden ml-6 flex' >
                <h1 className='text-green-700 mt-2 ' >Hi There ,<br></br>
               <span className='text-red-700 ml-12  ' >I'm Vedhagiri</span><br></br>
               <span className='text-blue-600 ml-12 '>Front-End </span><br></br>
                <span className='text-red-400  ml-6'>Junior Web Developer</span> </h1> 
                </div>
                <div className='md:hidden ml-16 mt-6'>
               <img src={pic} alt='profile' className=' w-32 mx-0  rounded-3xl  ' />
               </div>
                </div>
           <div className='hidden lg:flex space-x-4  ' >
               <h1 className='text-green-700  mt-32 ml-64 font-serif text-4xl font-thin'    >Hi There ,<br></br><br></br>
               <span className='text-red-700 ml-32 font-serif text-5xl  ' >I'm Vedhagiri</span><br></br><br></br>
               <span className='text-blue-600 ml-32 font-serif text-5xl'>Front-End </span><br></br>
                <span className='text-red-400  ml-10 font-serif text-5xl'>Junior Web Developer</span> </h1>
               <div>
               <img src={pic} alt='profile' className=' w-64  ml-48 my-20 rounded-3xl  ' />
               </div>
            </div>
           </div>
        </div>
    )
  }
}
export default Profile;