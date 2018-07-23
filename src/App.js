import React, { Component } from 'react';
import './App.css';
import BrewerySearch from './BrewerySearch';
import dotenv from 'dotenv';

class App extends Component {
  constructor(props) {
    super(props);
    dotenv.config();
    this.handleBreweryChange = this.handleBreweryChange.bind(this);
    this.handleBrewerySearch = this.handleBrewerySearch.bind(this);
    this.state = {brewery: ''};
  }

  handleBreweryChange(brewery) {
    this.setState({brewery: brewery});
  }

  handleBrewerySearch() {
    let brewery = this.state.brewery;
    let apiKey = "key=" + dotenv.BREWERY_KEY;
    fetch("/brewery?" + apiKey + "name=" + brewery)
      .then(response => response.json())
      .then(data => this.setState({breweries: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Brew Info</h1>
        </header>
        <br/>
        <BrewerySearch onBreweryChange={this.handleBreweryChange} />
        <button name="brewery-search" onClick={this.handleBrewerySearch}>
          Search
        </button>
      </div>
    );
  }
}

export default App;