class Game < ApplicationRecord
    has_many :ur_games
    has_many :users, through: :ur_games

    validates :name, presence: true
    validates :console, presence: true
    validates :image_url, presence: true
end
