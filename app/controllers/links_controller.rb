class LinksController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :fetch_actual_url, only: %i[decrypt_code]

  def index; end

  def create
    return render json: { data: 'Invalid Params' } if link_params[:actual_url].blank?

    shortener = Shortener.new(link_params[:actual_url])
    link = shortener.generate_short_link

    render json: { data: link }
  end

  def decrypt_code
    redirect_to @actual_url
  end

  private

  def link_params
    params.require(:link).permit(:actual_url)
  end

  def fetch_actual_url
    @actual_url = Link.fetch_url(params[:lookup_code])
  end
end
