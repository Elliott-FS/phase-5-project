class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def show
    
        if current_user
           render json: current_user, status: :ok
        else
            render json: { user: 'not logged in' }, status: :unauthorized
        end
    end

    def update
        if current_user.update(update_user_params)
            render json: current_user, status: :created
          else
            render json: current_user.errors, status: :unprocessable_entity
          end
    end
    private
    def user_params
        params.permit(:username, :password, :image_url)
    end

    def update_user_params
        params.permit(:username, :password, :image_url, :is_admin)
    end
end

