export default (state = [], action) => {
  switch(action.type) {
    case "GET_PODCASTS":
      return [...state]
    case "ADD_PODCAST":
      return [...state, action.payload]
    case "REMOVE_PODCAST":
      let newPodcasts = state.filter((podcast, id) => {
        return id !== action.payload
      })
      return [...newPodcasts]
    default:
      return state
  }
}
