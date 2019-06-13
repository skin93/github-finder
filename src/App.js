import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4];
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
      </div>
    );
  }
}

export default App;
