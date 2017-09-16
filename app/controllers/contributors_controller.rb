class ContributorsController < ApplicationController
  def index
    @contributors = Contributor.all
    render json: @contributors
  end

  def new
  end

  def show
    render json: contributor, status: 201
  end

  def create
    contributor = Contributor.create!(contributor_params)
    contributor.save
    render json: contributor, status: 201
  end

  private
    def contributor_params
      params.require(:contributor).permit(:lat, :lng, :reading)
    end
end
