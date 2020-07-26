import React from 'react'
import { connect } from 'react-redux'
import { deletePodcast } from '../actions/index'
import DeleteButton from './DeleteButton'

const PodcastCard = ({podcast, deletePodcast}) => {
  return (
    <div>
      {podcast.name} hosted by {podcast.hosts} <br />
      {podcast.genres} <br />
      <a href={podcast.link}>Give it a Listen!</a> <br />
      < DeleteButton name="Delete Podcast" podcast_id={podcast.id} deletePodcast={deletePodcast}/>
      <br /><br />
    </div>
  )
}

export default connect(null, { deletePodcast })(PodcastCard)
