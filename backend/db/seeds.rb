# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create 5 collections, each with 3+ podcasts

# Collection of tech-related podcasts
tech_collection = Collection.create(name: "Tech Podcasts")

tech_collection_podcast_1 = Podcast.new(
  name: "Syntax - Tasty Web Development Treats",
  hosts: "Wes Bos, Scott Tolinsky",
  genres: "technology, careers",
  link: "https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby"
)
tech_collection_podcast_1.collection_id = tech_collection.id
tech_collection_podcast_1.save

tech_collection_podcast_2 = Podcast.new(
  name: "Ladybug Podcast",
  hosts: "Emma Bostian, Kelly Vaughn, Ali Spittel",
  genres: "technology, careers",
  link: "https://open.spotify.com/show/1KBO1tSnm0XRlEILmqt7Em"
)
tech_collection_podcast_2.collection_id = tech_collection.id
tech_collection_podcast_2.save

tech_collection_podcast_3 = Podcast.new(
  name: "React Podcast",
  hosts: "Michael Chan",
  genres: "technology",
  link: "https://open.spotify.com/show/0HfSakJOFwFEa0ujCEK1pO"
)

tech_collection_podcast_3.collection_id = tech_collection.id
tech_collection_podcast_3.save


# Collection of business/career-centered podcasts
career_collection = Collection.create(name: "Business/ Career Podcasts")

career_collection_podcast_1 = Podcast.new(
  name: "Life Skills That Matter Podcast",
  hosts: "Stephen Warley",
  genres: "careers",
  link: "https://open.spotify.com/show/5bHq8sYDj8EvKgMx1Y0mWq"
)
career_collection_podcast_1.collection_id = career_collection.id
career_collection_podcast_1.save

career_collection_podcast_2 = Podcast.new(
  name: "Tools of Titans: The Tactics, Routines, and Habits of World-Class Performers",
  hosts: "Tim Ferriss",
  genres: "business",
  link: "https://open.spotify.com/show/4EXWrxruTTBpvWusYYPUDH"
)
career_collection_podcast_2.collection_id = career_collection.id
career_collection_podcast_2.save

career_collection_podcast_3 = Podcast.new(
  name: "The Futur with Chris Do",
  hosts: "Chris Do",
  genres: "business, marketing",
  link: "https://open.spotify.com/show/5K96ryZCjCmxqMzEotvS8h"
)

career_collection_podcast_3.collection_id = career_collection.id
career_collection_podcast_3.save




# Collection of self-help podcasts
self_help_collection = Collection.create(name: "Self-Help Podcasts")

self_help_collection_podcast_1 = Podcast.new(
  name: "The GaryVee Audio Experience",
  hosts: "Gary Vaynerchuk",
  genres: "self-help, personal growth, business",
  link: "https://open.spotify.com/show/6SZVsPIxPfVs6aavqM1peY"
)
self_help_collection_podcast_1.collection_id = self_help_collection.id
self_help_collection_podcast_1.save

self_help_collection_podcast_2 = Podcast.new(
  name: "The Daily Stoic",
  hosts: "Ryan Holiday",
  genres: "self-help, careers, philosophy",
  link: "https://open.spotify.com/show/7fY99FB3bNyn7nEdXCoBeB"
)
self_help_collection_podcast_2.collection_id = self_help_collection.id
self_help_collection_podcast_2.save

self_help_collection_podcast_3 = Podcast.new(
  name: "Straight Up with Trent Shelton",
  hosts: "Trent Shelton",
  genres: "self-help",
  link: "https://open.spotify.com/show/0257UcKYlowtsF49tCoxJ5"
)

self_help_collection_podcast_3.collection_id = self_help_collection.id
self_help_collection_podcast_3.save



# Collection of news/ talk radio podcasts
news_collection = Collection.create(name: "News Podcasts")

news_collection_podcast_1 = Podcast.new(
  name: "Up First",
  hosts: "Rachel Martin, Noel King, David Greene, Steve Inskeep/ NPR",
  genres: "news",
  link: "https://open.spotify.com/show/2mTUnDkuKUkhiueKcVWoP0"
)
news_collection_podcast_1.collection_id = news_collection.id
news_collection_podcast_1.save

news_collection_podcast_2 = Podcast.new(
  name: "Snacks Minute",
  hosts: "Jack Kramer & Nick Martell/ Robinhood Financial, LLC",
  genres: "business, finance, news",
  link: "https://open.spotify.com/show/0RrdRP2clWr5XCAYYA2j2A"
)

news_collection_podcast_2.collection_id = news_collection.id
news_collection_podcast_2.save

news_collection_podcast_3 = Podcast.new(
  name: "The David Pakman Show",
  hosts: "David Pakman",
  genres: "news, commentary, society, culture",
  link: "https://open.spotify.com/show/1T2BWou29M0aNfhFx61mL6"
)
news_collection_podcast_3.collection_id = news_collection.id
news_collection_podcast_3.save

# Collection of interesting, though-provoking podcasts

interesting_collection = Collection.create(name: "Interesting, Thought-Provoking Podcasts")

interesting_collection_podcast_1 = Podcast.new(
  name: "1619",
  hosts: "The New York Times",
  genres: "society, culture, history",
  link: "https://open.spotify.com/show/7j5MhJCMBvOjF1Asi9LPLX"
)

interesting_collection_podcast_1.collection_id = interesting_collection.id
interesting_collection_podcast_1.save


interesting_collection_podcast_2 = Podcast.new(
  name: "The Michelle Obama Podcast",
  hosts: "Michelle Obama/ Higher Ground",
  genres: "relationships, personal stories",
  link: "https://open.spotify.com/show/71mvGXupfKcmO6jlmOJQTP"
)

interesting_collection_podcast_2.collection_id = interesting_collection.id
interesting_collection_podcast_2.save


interesting_collection_podcast_3 = Podcast.new(
  name: "Ted Talks Daily",
  hosts: "Elise Hu/ TED",
  genres: "design & architecture, educational podcasts, technology",
  link: "https://open.spotify.com/show/1VXcH8QHkjRcTCEd88U3ti"
)

interesting_collection_podcast_3.collection_id = interesting_collection.id
interesting_collection_podcast_3.save
