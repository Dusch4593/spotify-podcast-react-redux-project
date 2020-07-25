import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To My Spotify Podcasts App!</h1>
        <a href="/collections">View Collections</a> <br />
        <a href="/collections/new">Create New Collection</a> <br />
      </div>
    )
  }
}

export default Home
