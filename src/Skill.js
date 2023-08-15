import './App.css';
import React from 'react';
import Home from './App';

class About extends React.Component{
    render(){
    return(
        <div className='m-0 p-0'>
            <Home/>
            
                <div className='skill'>
                    <div className='box'>
                    <div className='percentage'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    
                   <div className='number'>
                        <h2 >78<span>%</span></h2>
                   </div>
                   </div>
                   <h2 className='text'>HTML5</h2> 
                   
            
            </div>
            <div className='box'>
                   <div className='percentage1'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    
                   <div className='number1'>
                        <h2 >58<span>%</span></h2>
                   </div>
                   </div>
                   <h2 className='text1'>CSS3</h2> 
                   </div>

                   <div className='box'>
                   <div className='percentage2'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    
                   <div className='number2'>
                        <h2 >37<span>%</span></h2>
                   </div>
                   </div>
                   <h2 className='text2'>Javascript</h2> 
                   </div>
                   
                   <div className='box'>
                   <div className='percentage3'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    
                   <div className='number3'>
                        <h2 >34<span>%</span></h2>
                   </div>
                   </div>
                   <h2 className='text3'>React Js</h2> 
                   </div>

                   <div className='box'>
                   <div className='percentage4'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    
                   <div className='number4'>
                        <h2 >33<span>%</span></h2>
                   </div>
                   </div>
                   <h2 className='text4'>Tailwind CSS</h2> 
                   </div>
                
            </div>
        </div>
    )
  }
}
export default About;