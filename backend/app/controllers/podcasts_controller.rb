class PodcastsController < ApplicationController
  before_action :set_podcast, only: [:show, :update, :destroy]
  def index
    @podcasts = Podcast.all
    render json: @podcasts
  end

  def show
    render json: @podcast
  end


  private
  def set_podcast
    @podcast = Podcast.find_by(params[:id])
  end
end
