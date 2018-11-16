import React, { Component } from 'react';
import './App.css';
import AppRoute from './config/routes'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="bodyWrapper">
        
        <Navbar />
        <AppRoute />
      </div>
    );
  }
}

export default App;
