// fetch (GET) the current list of podcasts in the Rails backend
// => GET localhost:3001/podcasts
export const fetchPodcasts = () => {
  return {type: "GET_PODCASTS"}
}

// add (POST) a new podcast to a the DB
// => POST localhost:3001/podcasts
export const addPodcast = podcast => {
  return {type: "ADD_PODCAST", payload: podcast}
}

// remove (DELETE) a specific podcast (:id) from both the frontend and the backend
// => DELETE localhost:3001/podcasts/:id
export const deletePodcast = podcastId => {
  return {type: "REMOVE_PODCAST", payload: podcastId}
}
