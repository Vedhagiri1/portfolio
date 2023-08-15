
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';


class Vedha extends React.Component{
    render(){
    return(
        <div>
            <Home />
            <div className=''>
            
                <div className=' lg:hidden md:border-2 bg-green-200 w-10/12 ml-6 mt-4'>
                <h1>#1<span className='text-purple-900 text-xl'> Age Calculator</span>  </h1>
                <h2 className='ml-6 text-red-700 ' >Project Description</h2>
                  <p className='ml-2'>
                    Build using HTML5,Css3, Javascript. my age Calculator website is a great example for my skill as a
                    front-end developer. The website allows users to easily calculate their age and was created as part 
                    of my portfolio website,Which showcases my passion for front-end web development.
                    As a final year B.E CSE student, i am excited to pursue a career as a front-end web developer 
                    and continue building innovation web application.
                  </p>   
              
                
            </div>
            <div className=' lg:hidden md:border-2 bg-green-200 w-10/12 mt-6 ml-6'>
                <h1>#2<span className='text-purple-900 text-xl '>Portfolio</span>  </h1>
                <h2 className='ml-6 text-red-700 ' >Project Description</h2>
                  <p className='ml-2'>
                  I created my portfolio website using HTML and CSS frameworks like Tailwind CSS,
                  which gave me a lot of flexibility with the layout and design. I also used React JS 
                  to add interactivity and make the website more user-friendly. The website is also responsive,
                   which means it looks great on any device, and showcases my skills and experience. 
                   I'm really proud of how it turned out
                  </p>   
                </div>

      
        </div>
        <div className= 'hidden lg:flex ml-32 w-5/6 bg-red-200 mt-12'>
           <h1 className='mt-12 ml-48'>
            #1<span className='text-purple-900 text-xl'> Age Calculator</span></h1>
            
                <h2 className='ml-20 text-red-700 mt-12' >Project Description</h2>
                  <p className='ml-20 mt-6'>
                    Build using HTML5,Css3, Javascript. my age Calculator website is a great example for my skill as a
                    front-end developer. The website allows users to easily calculate their age and was created as part 
                    of my portfolio website,Which showcases my passion for front-end web development.
                    As a final year B.E CSE student, i am excited to pursue a career as a front-end web developer 
                    and continue building innovation web application.
                  </p>   
                </div>
         <div className= 'hidden lg:flex ml-32 w-5/6 bg-red-200 mt-12'>
           <h1 className='mt-12 ml-48'>
            #2<span className='text-purple-900 text-xl'> Portfolio</span></h1>
            
                <h2 className='ml-20 text-red-700 mt-12' >Project Description</h2>
                  <p className='ml-20 mt-6'>
                  I created my portfolio website using HTML and CSS frameworks like Tailwind CSS,
                  which gave me a lot of flexibility with the layout and design. I also used React JS 
                  to add interactivity and make the website more user-friendly. The website is also responsive,
                   which means it looks great on any device, and showcases my skills and experience. 
                   I'm really proud of how it turned out
                  </p>   
                </div>
        </div>
        
    )
  }
}
export default Vedha;