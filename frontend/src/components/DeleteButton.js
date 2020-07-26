import React from 'react'

const DeleteButton = props => {
  return (
    <button onClick={() => props.deletePodcast(props.podcast_id)}>{props.name}</button>
  )
}

export default DeleteButton
