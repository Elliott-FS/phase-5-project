Rails.application.routes.draw do
  
  resources :ul_games
  resources :playlists
  resources :ur_games
  resources :games
  resources :users

  get "/me", to: "users#show"
  patch "/me", to: "users#update"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
