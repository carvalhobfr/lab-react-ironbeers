import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import HomeLink from './views/HomeLink';
import Beer from './views/Beer';
import RandomBeer from './views/random-beer';
import AllBeers from './views/AllBeers';
import NewBeer from './views/new-beer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="root">
          <div>
            <div className="row">
              <HomeLink />
              <Route exact path="/new-beer" component={NewBeer} />
              <Route exact path="/" component={Home} />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route path="/beers/:beerId" component={Beer} />
              <Route exact path="/beers" component={AllBeers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

