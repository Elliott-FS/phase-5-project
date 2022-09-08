class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :image_url
      t.boolean :is_admin

      t.timestamps
    end
  end
end
