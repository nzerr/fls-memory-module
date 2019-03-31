// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './components/board/board.css';

import React, { Component } from 'react';
import Board from './components/board/board';
import Modal from './components/modal/modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Game">

          <Board></Board>

        </div>
      </div>
    );
  }
}

export default App;
