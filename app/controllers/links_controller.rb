class LinksController < ApplicationController
  protect_from_forgery with: :null_session

  def index; end

  def create
    return render json: { data: 'Invalid Params' } if link_params[:actual_url].blank?

    shortener = Shortener.new(link_params[:actual_url])
    link = shortener.generate_short_link

    render json: { data: link }
  end

  private

  def link_params
    params.require(:link).permit(:actual_url)
  end
end
