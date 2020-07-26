import React, { Component } from 'react'
import PodcastCard from '../components/PodcastCard'
import { connect } from 'react-redux'

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

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts
  }
}

export default connect(mapStateToProps)(Podcasts)
