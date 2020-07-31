class PodcastsController < ApplicationController
  before_action :set_podcast, only: [:show, :update, :destroy]
  def index
    @podcasts = Podcast.all
    render json: @podcasts
  end

  def show
    render json: @podcast
  end

  def create
    @new_podcast = Podcast.new(podcast_params)

    if @new_podcast.save
      render json: @new_podcast
    else
      render json: @new_podcast.errors
    end
  end

  def destroy
    @podcast.destroy
    render json: @podcast
  end

  private
  def set_podcast
    @podcast = Podcast.find_by_id(params[:id])
  end

  def podcast_params
    params.require(:podcast).permit(:name, :hosts, :genres, :link)
  end

end
