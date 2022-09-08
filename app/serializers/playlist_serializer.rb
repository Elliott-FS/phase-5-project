class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :ul_games
end
