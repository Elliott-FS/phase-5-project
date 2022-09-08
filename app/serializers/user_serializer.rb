class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :is_admin
  has_many :ur_games 
  has_many :playlists
end
