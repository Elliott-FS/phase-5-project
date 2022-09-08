# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_03_130424) do

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.string "console"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "ul_games", force: :cascade do |t|
    t.string "name"
    t.string "console"
    t.string "image_url"
    t.integer "playlist_id", null: false
    t.integer "ur_game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["playlist_id"], name: "index_ul_games_on_playlist_id"
    t.index ["ur_game_id"], name: "index_ul_games_on_ur_game_id"
  end

  create_table "ur_games", force: :cascade do |t|
    t.string "name"
    t.string "console"
    t.string "image_url"
    t.integer "user_id", null: false
    t.integer "game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_ur_games_on_game_id"
    t.index ["user_id"], name: "index_ur_games_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.boolean "is_admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "playlists", "users"
  add_foreign_key "ul_games", "playlists"
  add_foreign_key "ul_games", "ur_games"
  add_foreign_key "ur_games", "games"
  add_foreign_key "ur_games", "users"
end
