Rails.application.routes.draw do
  resources :subscriptions
  resources :boxes
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logoout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # get '*path', to: "fallback#index", constraints: ->(req) {!req.xhr? && req.format.html?}
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/hello', to: 'application#hello_world'

end
