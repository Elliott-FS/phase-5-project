class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :console
      t.string :image_url

      t.timestamps
    end
  end
end
