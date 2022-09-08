class Playlist < ApplicationRecord
  belongs_to :user

  has_many :ul_games, dependent: :destroy #check spelling
  has_many :ur_games, through: :ul_games

  validates :name, presence: true
end
