import React, { Component } from 'react'
import PodcastCard from '../components/PodcastCard'

class Podcasts extends Component {
  render() {
    return(
      <div>

        {this.props.podcasts.map((p, id) => (
          < PodcastCard key={id} podcast={p} />
        ))}
      </div>
    )
  }
}

export default Podcasts
