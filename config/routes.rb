Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :stocks, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index, :show]
    resources :watchlist, only: [:create, :show, :update, :destroy]
  end

  root to: "static_pages#root"
end
