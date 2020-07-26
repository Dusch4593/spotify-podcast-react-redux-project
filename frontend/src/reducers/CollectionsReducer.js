export default (state = [
  {
    name: "Example Collection",
    podcasts: [
      {
        name: "Example Podcast",
        hosts: "Example Hosts",
        genres: "genreA, genreB, genreC",
        link: "dummylink.com"
      }
    ]
  }
], action) => {
  switch(action.type) {
    case "GET_COLLECTIONS":
      debugger
      return [...state]
    case "ADD_COLLECTION":
      return [...state, action.payload]
    case "DELETE_COLLECTION":
      let newCollections = state.filter(collection => collection.id !== action.payload)
      return [...newCollections]
    default:
      return state
  }
}
