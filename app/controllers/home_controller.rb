require 'net/http'

class HomeController < ApplicationController
  before_action :require_login

  def index
    @pm_data = get_data
  end

  def overview
    @pm01 = 6
    @pm02 = 0
  end

  def login; end

  private

  def get_data
    uri = URI('http://localhost:3000/api/PSEMPDPM_Data.json')
    res = JSON.parse(Net::HTTP.get(uri))
    res["value"].take(240)
  end
end
