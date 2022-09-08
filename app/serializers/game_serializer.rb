class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :console, :image_url
end
