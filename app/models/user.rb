class User < ApplicationRecord
    has_secure_password

    has_many :subscriptions
    has_many :boxes, through: :subscriptions

    validates :username, presence: true uniqueness: true

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
            #admin? signup/check
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private 

    def user_params
        parmas.permit(:username, :password, :password_confirmation, :email, :admin?)
    end


end


