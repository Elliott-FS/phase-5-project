class CreateUlGames < ActiveRecord::Migration[6.1]
  def change
    create_table :ul_games do |t|
      t.string :name
      t.string :console
      t.string :image_url
      t.belongs_to :playlist, null: false, foreign_key: true
      t.belongs_to :ur_game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
