class UrGamesController < ApplicationController
    def index
        games = UrGame.all 
        render json: games, status: :ok 
    end
    
    def create
        your_game = UrGame.create(ur_games_params)
        if your_game.valid?
            render json: your_game, status: :ok
        else 
            render json: your_game.errors, status: :unprocessable_entity
        end
    end

    private

    def ur_games_params
        params.permit(:name, :console, :image_url, :user_id, :game_id)
    end

end


