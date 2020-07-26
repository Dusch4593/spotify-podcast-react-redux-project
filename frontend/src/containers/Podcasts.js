import React, { Component } from 'react'
import PodcastCard from '../components/PodcastCard'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import DeleteButton from '../components/DeleteButton'
import { fetchPodcasts, addPodcast, deletePodcast } from '../actions/index'

class Podcasts extends Component {

  componentDidMount() {
    this.props.fetchPodcasts()
  }

  render() {
    return(
      <div>
        < AddButton name="Add Podcast" addPodcast={this.props.addPodcast}/>
        {this.props.podcasts.map((p, id) => (
          <div>
            < PodcastCard key={id} podcast={p} />
            < DeleteButton key={id} name="Delete Podcast" podcast_id={id} deletePodcast={this.props.deletePodcast}/>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchPodcasts: () => dispatch(fetchPodcasts()),
    addPodcast: podcast => dispatch(addPodcast(podcast)),
    deletePodcast: podcastId => dispatch(deletePodcast(podcastId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts)
