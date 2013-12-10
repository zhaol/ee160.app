require 'open-uri'

class MapsController < ApplicationController
  before_action :get_coordinates
  def index
    render :new
  end
  
  def new
  end
  
  def create
    render :new
  end
  
  private
  
  def get_coordinates
    if coordinates_file = params[:coordinates_file]
      @coordinates = coordinates_file.read
    else
      @coordinates = open('https://raw.github.com/zhaol/ee160_app/master/public/uhm.json').read
    end
  end
end