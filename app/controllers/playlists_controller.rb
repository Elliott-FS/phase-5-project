class PlaylistsController < ApplicationController
    def index
        
        # playlists = Playlist.all
        playlist_item = current_user.playlists
        render json: playlist_item, status: :ok
        
    end

    def create
        playlist = Playlist.create(playlist_params)
        if playlist.valid?
            render json: playlist, status: :ok
        else
            render jon: playlist.errors, status: :unprocessable_entity
        end
    end

    def update
        playlist = Playlist.find_by_id(params[:id])
        if playlist.update(update_playlist_params)
          render json: playlist, status: :ok
        else
          render json: playlist.errors, status: :unprocessable_entity
        end
    end

    def destroy 
        playlist = Playlist.find_by_id(params[:id])
        playlist.destroy
        head :no_content, status: :ok
    end

    private
    def playlist_params
        params.permit(:name, :user_id)
    end
    def update_playlist_params
        params.permit(:name)
    end
end

