import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav-links">
          <li>< NavLink to="/">Home</ NavLink ></li>
          <li>< NavLink to="/podcasts/new">Add Podcast</ NavLink ></li>
          <li>< NavLink to="/podcasts">See All Podcasts</ NavLink ></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
