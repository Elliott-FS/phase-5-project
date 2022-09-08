class UrGame < ApplicationRecord
  belongs_to :user
  belongs_to :game

  has_many :ul_games
  has_many :playlists, through: :ul_games

  validates :name, presence: true
  validates :console, presence: true
  validates :image_url, presence: true
end
