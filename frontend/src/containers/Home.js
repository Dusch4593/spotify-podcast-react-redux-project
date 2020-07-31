import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <h1>Welcome To My Podcasts App!</h1>
        <a className="home-page-link" href="/podcasts">View Podcasts</a> <br />
        <a className="home-page-link" href="/podcasts/new">Add New Podcast</a> <br />
      </div>
    )
  }
}

export default Home
