# About
Users can create and name collections that can store many podcasts (with links to their respective page on [open.spotify.com](open.spotify.com))

# Configuration
1. Clone this repo to your local machine. `cd` into the repo.
2. Open two terminal/ console windows
3. `cd` into `frontend` in one window; `cd` into `backend` in the other
4. In `backend`, run `bundle install`, then `rails db:migrate`, then `rails db:seed`, then `rails s`
5. In `frontend`, run `npm install && npm start`


# Usage
Home Page:

* Add a new podcast by submitting a new podcast form
* View all podcasts that currently exist in the database

Podcasts Page:

* Add a new podcast by submitting a new podcast form
* Delete a podcast from the frontend and database (backend)
* Click on "Home" to go back to the home page

New Podcast Form:

* Fill the form with the proper information
* Submit and add to the database (redirects to the Podcasts Page afterward)

# License
This app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT)
