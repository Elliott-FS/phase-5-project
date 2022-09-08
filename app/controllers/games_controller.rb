class GamesController < ApplicationController
    def index
        games = Game.all 
        render json: games, status: :ok
    end
    
    def create
        game = Game.create(game_params)
        if game.valid?
            render json: game, status: :ok
        else
            render json: game.errors, status: :unprocessable_entity
        end
    end

    private

    def game_params
      params.permit(:name, :console, :image_url)
    end
end
