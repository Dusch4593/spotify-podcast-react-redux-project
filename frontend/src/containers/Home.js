import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To My Podcasts App!</h1>
        <a href="/podcasts">View Podcasts</a> <br />
        <a href="/podcasts/new">Add New Podcast</a> <br />
      </div>
    )
  }
}

export default Home
