require 'net/http'

class HomeController < ApplicationController
  before_action :require_login

  def index
    # ...
  end

  def pm60kv
    # ...
  end

  private

  def get_data
    uri = URI('http://localhost:3000/api/PSEMPDPM_Data.json')
    res = JSON.parse(Net::HTTP.get(uri))
    res["value"].take(240)
  end
end
