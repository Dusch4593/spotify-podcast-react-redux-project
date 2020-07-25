import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Collections from './containers/Collections'
import CollectionNew from './containers/CollectionNew'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/collections/new" component={ CollectionNew } />
            <Route exact path="/collections" component={ Collections } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
