import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Podcasts from './containers/Podcasts'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PodcastsNew from './containers/PodcastNew'

class App extends Component {
  render() {
    return (
      <Router>
        < NavBar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/podcasts/new" component={ PodcastsNew } />
            <Route exact path="/podcasts" component={ Podcasts } />
          </Switch>
        </div>
        < Footer />
      </Router>
    );
  }
}

export default App;
