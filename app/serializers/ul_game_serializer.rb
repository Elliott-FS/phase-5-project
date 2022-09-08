class UlGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :console, :image_url
  has_one :playlist
  has_one :ur_game
end
