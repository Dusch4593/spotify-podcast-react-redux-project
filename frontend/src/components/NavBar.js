import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav id="nav-bar-container">
          <ul id="nav-links">
            <li className="nav-link">< NavLink to="/">Home</ NavLink ></li>
            <li className="nav-link">< NavLink to="/podcasts/new">Add Podcast</ NavLink ></li>
            <li className="nav-link">< NavLink to="/podcasts">See All Podcasts</ NavLink ></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
