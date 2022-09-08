class User < ApplicationRecord
    has_many :ur_games
    has_many :games, through: :ur_games
    has_many :playlists
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
