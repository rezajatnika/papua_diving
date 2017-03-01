Rails.application.routes.draw do
  # Homepage
  root 'home#overview'

  # Login  page
  delete 'logout',   to: 'user_sessions#destroy'
  get    'login',    to: 'user_sessions#new'
  post   'login',    to: 'user_sessions#create'
  get    'overview', to: 'home#overview'
end
