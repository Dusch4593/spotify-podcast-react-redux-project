export default (state = [
  {
    name: "Syntax - Tasty Web Development Treats",
    hosts: "Wes Bos, Scott Tolinsky",
    genres: "technology, careers",
    link: "https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby"
  },
  {
    name: "The Daily Stoic",
    hosts: "Ryan Holiday",
    genres: "self-help, careers, philosophy",
    link: "https://open.spotify.com/show/7fY99FB3bNyn7nEdXCoBeB"
  },
  {
    name: "1619",
    hosts: "The New York Times",
    genres: "society, culture, history",
    link: "https://open.spotify.com/show/7j5MhJCMBvOjF1Asi9LPLX"
  },
  {
    name: "Ted Talks Daily",
    hosts: "Elise Hu/ TED",
    genres: "design & architecture, educational podcasts, technology",
    link: "https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti"
  },
  {
    name: "The David Pakman Show",
    hosts: "David Pakman",
    genres: "news, commentary, society, culture",
    link: "https://open.spotify.com/show/1T2BWou29M0aNfhFx61mL6"
  }
], action) => {
  switch(action.type) {
    case "GET_PODCASTS":
      return [...state]
    case "ADD_PODCAST":
      return [...state, action.payload]
    case "REMOVE_PODCAST":
      let newPodcasts = state.filter(podcast => podcast.id !== action.payload)
      return [...newPodcasts]
    default:
      return state
  }
}
