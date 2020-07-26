import React, { Component } from 'react'
import { addPodcast } from '../actions/index'
import { connect } from 'react-redux'

class PodcastNew extends Component {
  state = {
    name: '',
    hosts: '',
    genres: '',
    link: ''
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    this.props.addPodcast(this.state)
    document.getElementById('new-podcast-form').reset()
    this.props.history.push('/podcasts')
  }


  render() {
    return (
      <form id="new-podcast-form" onSubmit={this.handleSubmit}>
        <h3>Add New Podcast</h3>
        <label>Name</label> <br />
        <input type="text" onChange={this.handleChange} value={this.state.name} name="name"/>
        <br /> <br />
        
        <label>Hosts/ Publisher (if applicable)</label> <br />
        <input type="text" onChange={this.handleChange} value={this.state.hosts} name="hosts"/>
        <br /> <br />

        <label>Genres (comma-separated list)</label> <br />
        <input type="text" onChange={this.handleChange} value={this.state.genres} name="genres"/>
        <br /> <br />

        <label>Link (such as <a href="https://open.spotify.com/show/3IM0lmZxpFAY7CwMuv9H4g">https://open.spotify.com/show/3IM0lmZxpFAY7CwMuv9H4g</a>)</label> <br />
        <input type="text" onChange={this.handleChange} value={this.state.link} name="link"/>
        <br /> <br />

        <input type="submit" value="Create New Collection" />
      </form>
    )
  }
}

export default connect(null, { addPodcast })(PodcastNew)
