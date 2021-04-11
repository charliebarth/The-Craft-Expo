Rails.application.routes.draw do
  resources :demos, only: [:index]
  resources :crafts, only: [:create, :destory, :index]
  resources :users, only: [:create]
  resources :auth, only: [:create]

  get 'profile', to: "auth#profile"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
