import logo from './logo.svg';
import Header from './componetns/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './main.css'

import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import React from 'react';
import { Toaster } from 'react-hot-toast';

// window.addEventListener('scroll',(e)=> {
//   e.preventDefault()
//   console.log(window.scrollY)
//   console.log(e)
// })



function App() {
    return (
      <div className="App" >
        <div><Toaster/></div>
        <Header></Header>
        
      </div>
    );
  }

export default App;
