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
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: ['subscriptions', 'subscriptions.box'], status: :ok
        else
            render json: {message: "session user id: #{session[:user_id]}"}, status: :unauthorized
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
        @current_user.update(user_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        @current_user.destroy
        render json: {}, status: 204
    end

    private

    def find_user
        if session[:user_id]
            @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :isAdmin)
    end
end
