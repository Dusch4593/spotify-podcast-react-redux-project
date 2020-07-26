import React from 'react'
import { useHistory } from 'react-router-dom'

const AddButton = props => {
  const history = useHistory()
  return (
    <button id="add-button" onClick={() => history.push("/podcasts/new")}>{props.name}</button>
  )
}

export default AddButton
