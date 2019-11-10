import React, { Component } from 'react';
import Navbar from './components/Navbar'
import DisplayUsers from './components/DisplayUsers' 
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar/> 
          <DisplayUsers/>   
        </div>  
    )
  }
}

export default App

