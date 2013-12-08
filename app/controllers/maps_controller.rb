class MapsController < ApplicationController
  def index
    @coordinates = []
    render :new
  end
  
  def new
    @coordinates = []
  end
  
  def create
    coordinates_file = params[:coordinates_file]
    @coordinates = coordinates_file.read.html_safe
    render :new
  end
end