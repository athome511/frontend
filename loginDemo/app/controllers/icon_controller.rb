class IconController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def by_index
    index = params[:index]
    icon = User.find_by(id: index).icon

    base64_image = icon.split(',', 2).last

    send_data ::Base64.decode64(base64_image),
              filename: "#{index}.png",
              type: 'image/png',
              disposition: 'inline'
  end
end
