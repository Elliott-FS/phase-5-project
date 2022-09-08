class UrGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :console, :image_url
  has_one :user
  has_one :game
end
