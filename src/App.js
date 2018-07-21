import React, { Component } from 'react';
import './App.css';
import BrewerySearch from './BrewerySearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Brew Info</h1>
        </header>
        <br/>
        <BrewerySearch />
      </div>
    );
  }
}

export default App;
