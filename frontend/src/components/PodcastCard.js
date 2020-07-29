import React from 'react'
import { connect } from 'react-redux'
import { deletePodcast } from '../actions/index'
import DeleteButton from './DeleteButton'

const PodcastCard = ({podcast, deletePodcast}) => {
  return (
    <div className="podcast-card">
      <span id="podcast-name">{podcast.name}</span> hosted by <span id="podcast-hosts">{podcast.hosts}</span> <br />
      Genres: <span id="podcast-genres">{podcast.genres}</span> <br />
      <a id="podcast-link" rel="noopener noreferrer" target="_blank" href={podcast.link}>Give it a Listen!</a> <br />
      < DeleteButton name="Delete Podcast" podcast_id={podcast.id} deletePodcast={deletePodcast}/>
      <br /><br />
    </div>
  )
}

export default connect(null, { deletePodcast })(PodcastCard)
