import React, { Component } from 'react';
import logo from './logo.svg';
import IdeaList from './idealist.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Idea Box Returns </h1>
        </header>
        <IdeaList />
      </div>
    );
  }
}

export default App;
