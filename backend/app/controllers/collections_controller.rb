class CollectionsController < ApplicationController
  before_action :set_collection, only: [:show, :update, :destroy]
  # GET /collections
  def index
    @collections = Collection.all
    render json: @collections
  end

  # GET /collections/:id
  def show
    render json: @collection
  end

  # POST /collections
  def create

  end

  # PATCH/ PUT collections/:id

  # DELETE collections/:id

  private

  def set_collection
    @collection = Collection.find_by(id: params[:id])
  end

  def collection_params
    params.require(:collection).permit(
      :name,
      :podcasts_attributes: [
        :id,
        :name,
        :hosts,
        :genres,
        :link,
        :collection_ids
      ]
    )
  end
end
