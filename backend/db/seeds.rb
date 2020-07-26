# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create 5 podcasts

# Tech-related podcast
podcast_1 = Podcast.new(
  name: "Syntax - Tasty Web Development Treats",
  hosts: "Wes Bos, Scott Tolinsky",
  genres: "technology, careers",
  link: "https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby"
)
podcast_1.save


# Business/ Careers-related podcast
podcast_2 = Podcast.new(
  name: "Life Skills That Matter Podcast",
  hosts: "Stephen Warley",
  genres: "careers",
  link: "https://open.spotify.com/show/5bHq8sYDj8EvKgMx1Y0mWq"
)
podcast_2.save


# Self-Help podcasts
podcast_3 = Podcast.new(
  name: "The GaryVee Audio Experience",
  hosts: "Gary Vaynerchuk",
  genres: "self-help, personal growth, business",
  link: "https://open.spotify.com/show/6SZVsPIxPfVs6aavqM1peY"
)
podcast_3.save


# News/ Talk-Radio podcasts
podcast_4 = Podcast.new(
  name: "The David Pakman Show",
  hosts: "David Pakman",
  genres: "news, commentary, society, culture",
  link: "https://open.spotify.com/show/1T2BWou29M0aNfhFx61mL6"
)
podcast_4.save


# Interesting, Though-Provoking podcasts
podcast_5 = Podcast.new(
  name: "1619",
  hosts: "The New York Times",
  genres: "society, culture, history",
  link: "https://open.spotify.com/show/7j5MhJCMBvOjF1Asi9LPLX"
)
podcast_5.save
