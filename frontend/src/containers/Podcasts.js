import React, { Component } from 'react'
import PodcastCard from '../components/PodcastCard'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { fetchPodcasts, addPodcast} from '../actions/index'

class Podcasts extends Component {

  componentDidMount() {
    this.props.fetchPodcasts()
  }

  componentDidUpdate() {
    this.props.fetchPodcasts()
  }

  render() {
    return(
      <div className="podcasts-container">
        < AddButton name="Add Podcast" addPodcast={this.props.addPodcast}/>
        {this.props.podcasts.map((p, id) => < PodcastCard key={id} podcast={p} />)}
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
    addPodcast: podcast => dispatch(addPodcast(podcast))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts)
