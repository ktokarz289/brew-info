import React, { Component } from 'react';
import './App.css';
import BrewerySearch from './BrewerySearch';
import BreweryList from './BreweryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBreweryChange = this.handleBreweryChange.bind(this);
    this.handleBrewerySearch = this.handleBrewerySearch.bind(this);
    this.state = {brewery: ''};
  }

  handleBreweryChange(brewery) {
    this.setState({brewery: brewery});
  }

  handleBrewerySearch() {
    let brewery = this.state.brewery;
    fetch("/brewery?brewery=" + brewery)
      .then(response => response.json())
      .then(data => this.setState({breweryList: data}));
  }

  render() {
    return (
      <div>
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
        <BreweryList breweryList={this.state.breweryList}/>
      </div>
    );
  }
}

export default App;