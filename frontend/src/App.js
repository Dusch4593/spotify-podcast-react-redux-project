import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Podcasts from './containers/Collections'
// TODO: Will re-import after changes below
//import Collection from './containers/Collection'
import PodcastsNew from './containers/CollectionNew'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/podcasts/new" component={ PodcastsNew } />
            <Route exact path="/podcasts" component={ Podcasts } />
            // TODO: User render attr to pass props to the PodcastCard component? (stateless)
            //<Route exact path="/podcasts/:id" component={ Podcast } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
