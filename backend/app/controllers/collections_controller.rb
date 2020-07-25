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
    @collection = Collection.new(collection_params)

    if @collection.save
      render json: @collection
    else
      render json: @collection.errors
    end
  end

  # PATCH/ PUT collections/:id
  def update
    if @collection.update(collection_params)
      render json: @collection
    else
      render json: @collection.errors
    end
  end

  # DELETE collections/:id
  def delete
    @collection.destroy
    render json: @collection
  end


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
