class UlGame < ApplicationRecord
  belongs_to :playlist
  belongs_to :ur_game

  validates :name, presence: true
  validates :console, presence: true
end
