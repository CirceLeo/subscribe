class User < ApplicationRecord
    has_secure_password

    has_many :subscriptions, dependent: :destroy
    has_many :boxes, through: :subscriptions

    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true


    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
            #admin? signup/check
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def total_box_cost
        self.boxes.sum(:price)
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :isAdmin)
    end


end


