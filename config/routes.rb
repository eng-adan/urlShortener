Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :links, only: %i[index create]# do

  get '/:lookup_code', to: 'links#decrypt_code'
end
