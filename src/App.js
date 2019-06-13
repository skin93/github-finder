import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserItem from './users/UserItem';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <UserItem />
      </div>
    );
  }
}

export default App;
