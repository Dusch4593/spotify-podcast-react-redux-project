import React, { Component } from 'react'

class PodcastNew extends Component {
  state = {
    name: ''
  }


  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    alert("form submitted!")
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create New Collection</h3>
        <label>Name</label>:
        <input type="text" onChange={this.handleChange} value={this.state.name} />
        <br />
        <input type="submit" value="Create New Collection" />
      </form>
    )
  }
}

export default PodcastNew
