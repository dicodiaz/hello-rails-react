Rails.application.routes.draw do
  root 'root#index'
  get '/random_greeting', to: 'greetings#random_greeting'
  get '*path', to: 'root#index'
end
