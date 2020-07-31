// fetch (GET) the current list of podcasts in the Rails backend
// => GET localhost:3001/podcasts
export const fetchPodcasts = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/podcasts`)
      .then(res => res.json())
      .then(podcasts => {
        dispatch({type: "GET_PODCASTS", payload: podcasts})
      })
  }
}

// add (POST) a new podcast to a the DB
// => POST localhost:3001/podcasts
export const addPodcast = podcast => {
  return dispatch => {
    return fetch(`http://localhost:3001/podcasts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({podcast: podcast})
    })
      .then(res => res.json())
      .then(podcast => {

        dispatch({type: "ADD_PODCAST", payload: podcast})
      })
  }
}


// remove (DELETE) a specific podcast (:id) from both the frontend and the backend
// => DELETE localhost:3001/podcasts/:id
export const deletePodcast = podcastId => {
  return dispatch => {
    return fetch(`http://localhost:3001/podcasts/${podcastId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(podcast => {
        dispatch({type: "REMOVE_PODCAST", payload: podcastId})
      })
  }
}
