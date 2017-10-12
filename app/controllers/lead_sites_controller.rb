class LeadSitesController < ApplicationController
skip_before_filter :verify_authenticity_token

  def index
    @lead_sites = LeadSite.all
    render json: @lead_sites
  end

  def show
    @lead_site = LeadSite.find(params[:id])
    render json: @lead_site
  end

  def update
    @lead_site = LeadSite.find(params[:id])
    new_likes = @lead_site.likes + 1
    @lead_site.update(likes: new_likes)
  end

  private
    def lead_site_params
      params.permit(:lat, :lng, :name, :address, :likes)
    end
end
