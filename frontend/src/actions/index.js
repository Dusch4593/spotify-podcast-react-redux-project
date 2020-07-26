// fetch the collection data from the Rails backend
// => GET localhost:3001/collections
export const getCollections = () => {
  return { type: "GET_COLLECTIONS"}
}

// add a new collection to the DB (with or without podcasts)
// => POST localhost:3001/collections

// remove (DELETE) a specific collection (:id) from both the frontend and the backend
// => DELETE localhost:3001/collections/:id

// fetch specific podcast data from a given collection
// => GET localhost:3001/collections/:id/podcasts/:id

// add (POST) a new podcast to a the DB (to a specific collection => /collections/:id/podcasts)
// => POST localhost:3001/collections/:id/podcasts

// remove (DELETE) a specific podcast (:id) from both the frontend and the backend
// => DELETE localhost:3001/collections/:id/podcasts/:id
