Rails.application.routes.draw do
  resources :subscriptions
  resources :boxes
  resources :users

  #namespace :api do
  #namespace :v1 do
  #(links will be /api/v1/login)

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/auth', to: 'users#show'

  get '/high-to-low', to: 'boxes#high_to_low'
  get '/low-to-high', to: 'boxes#index'

  # get '*path', to: "fallback#index", constraints: ->(req) {!req.xhr? && req.format.html?}
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/hello', to: 'application#hello_world'

end
