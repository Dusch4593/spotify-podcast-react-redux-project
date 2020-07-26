import React from 'react'
import { connect } from 'react-redux'
import { deletePodcast } from '../actions/index'
import DeleteButton from './DeleteButton'

const PodcastCard = ({podcast, id, deletePodcast}) => {
  return (
    <div>
      {podcast.name} hosted by {podcast.hosts} <br />
      {podcast.genres}
      < DeleteButton name="Delete Podcast" podcast_id={id} deletePodcast={deletePodcast}/>
    </div>
  )
}

export default connect(null, { deletePodcast })(PodcastCard)
