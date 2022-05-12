class SessionsController < ApplicationController
    skip_before_action :user_authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: ['subscriptions', 'subscriptions.box'],  status: :created
        else 
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            head :no_content
            # render json: {}, status: 204
        else
            render json: {errors: ["No user currently logged in"]}, status: 401
        end
    end
end
