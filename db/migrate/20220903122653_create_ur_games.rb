class CreateUrGames < ActiveRecord::Migration[6.1]
  def change
    create_table :ur_games do |t|
      t.string :name
      t.string :console
      t.string :image_url
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
