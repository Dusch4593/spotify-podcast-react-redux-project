import React from 'react'

const PodcastCard = props => {
  return (
    <div>
      {props.podcast.name} hosted by {props.podcast.hosts} <br />
      {props.podcast.genres}
    </div>
  )
}

export default PodcastCard
