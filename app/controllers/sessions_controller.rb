class SessionsController < ApplicationController
    skip_before_action :user_authorize, only: create
    #does this mean you can't access unless you're a user cause no thank you

    def create
        user = User.find_by(username: params[:username])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {error: "Invalid username or passord"}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            render json: {}, status: 204
        else
            render json: {errors: ["No user currently logged in"]}, status: 401
        end
    end
end
