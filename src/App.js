import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom';

class Home extends React.Component{
  render(){ 
  return (
   <body>
    <section className="p-3 md:p-9 bg-black text-white  ">
    <div className='container mx-auto'>
      <div>
      <button className='lg:hidden mx-auto' onClick={nav}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

        </button>
      </div>
      <div className='hidden' id='nav'>
    <ul className='lg:hidden'>
       <li className='pr-5'><Link to ="/">Home</Link></li>
       <li className='pr-5'><Link to="/p">Projects</Link></li>
       <li className='pr-5'><Link to="/r">Skills</Link></li>
       <li className='pr-5'><Link to="/c">Contact</Link></li>
       </ul>
       </div>
    </div>
      <div className='flex color-red lg:ml-64'>
     
    
        <div >
       <ul className='hidden lg:flex ml-64'>
       <li className='pr-7 ml-64'><Link to ="/"className='ml-64'>Home</Link></li>
       <li className='pr-7'><Link to ="/p" >Projects</Link></li>
       <li className='pr-7'><Link to ="/r">Skills</Link></li>
       <li className='pr-7'><Link to ="/c">Contact</Link></li>
       </ul>
      </div>
      </div>
     
    </section>
    
   </body>
   
      
  );
 
}
}
export default Home;

// nav js function

function nav(){
  var menu = document.getElementById('nav');
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');;
  }
}



