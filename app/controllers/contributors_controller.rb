class ContributorsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @contributors = Contributor.all
    render json: @contributors
  end

  def new
    @contributor = Contributor.new
  end

  def show
    render json: contributor, status: 201
  end

  def create
    @contributor = Contributor.new(contributor_params)
    @contributor.save
  end

  private
    def contributor_params
      params.permit(:lat, :lng, :reading)
    end
end
