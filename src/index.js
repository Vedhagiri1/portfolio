import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom';

import Vedha from './projects';
import About from './Skill';
import Profile from './home';
import Contact from './Contact';


const  routing= (
  <Router>
    
    <div>
    <Routes>
    <Route  path="/" Component={Profile}/>
    <Route path="/p" Component={ Vedha }/>
    <Route  path="/r" Component={ About }/>
    <Route  path="/c" Component={ Contact }/>
    </Routes>
    </div>
   
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));
