import React, { Component } from 'react';
import './App.css';

import AddFriendModal from './components/AddFriendModal';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends</h1>
          <AddFriendModal />
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
