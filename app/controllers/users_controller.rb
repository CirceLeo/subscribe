class UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :destroy]

    skip_before_action :user_authorize, only: :create
    # before_action :admin_authorize, only: :index

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        if session[:user_id]
            render json: @current_user, include: ['subscriptions', 'subscriptions.box'], status: :ok
        else
            render json: {message: "#{session[:user_id]}"}
        end
        #     user = User.find(session[:user_id])
        #     render json: user, include: ['subscriptions', 'subscriptions.box'], status: :ok
        # else 
        #     render json: {message: "No user logged in"}, status: :unauthorized
        # end
        # #authenticating a logged in user
        # if @user
        #     render json: @user, include: ['subscriptions', 'subscriptions.box'], status: :ok
        # else
        #     render json: {message: "No user logged in"}, status: :unauthorized
        # end
    end

    def index
        render json: User.all, status: :ok
    end

    def update
        @user.update(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        render json: {}, status: 204
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :isAdmin)
    end
end
