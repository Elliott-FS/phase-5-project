class UlGamesController < ApplicationController

    def create
        playlist_game = UlGame.create(ul_game_params)
        if playlist_game.valid?
            render json: playlist_game, status: :ok
        else 
            render json: playlist_game.errors, status: :unprocessable_entity
        end
    end

    def destroy 
        playlist_game = UlGame.find_by_id(params[:id])
        playlist_game.destroy
        head :no_content, status: :ok
    end

    private

    def ul_game_params
        params.permit(:name, :console, :ur_game_id, :playlist_id)
    end
end

