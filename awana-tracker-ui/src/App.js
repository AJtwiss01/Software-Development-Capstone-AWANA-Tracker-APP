import React, { Component } from 'react';
import AppRoute from './config/routes'
import Navbar from './Components/Navbar'
import './styles/overrides.scss'; 


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
