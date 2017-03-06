Rails.application.routes.draw do
  # Homepage
  root 'home#index'

  # Trend 60 kVA
  scope module: 'power_meter60' do
    get 'hourly', to: 'power_meter60#hourly'
  end

  # Login  page
  delete 'logout',   to: 'user_sessions#destroy'
  get    'login',    to: 'user_sessions#new'
  post   'login',    to: 'user_sessions#create'
  get    'overview', to: 'home#overview'
end
