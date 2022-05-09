class SubscriptionsController < ApplicationController
    before_action :find_subscription, only: [:show, :update, :destroy]
    before_action :admin_authorize, only: :index

    def create
        subscription = Subscription.create!(subscription_params)
        render json: subscription, status: :created
    end

    def show
        render json: @subscription, status: :ok
    end

    def index
        render json: Subscription.all, status: :ok
    end

    def update
        @subscription.update(subscription_params)
        render json: @subscription, status: :accepted
    end

    def destroy
        @subscription.destroy
        render json: {}, status: 204
        # head :no_content, status: 204
    end

    private
    def find_subscription
        @subscription = Subscription.find(params[:id])
    end
    def subscription_params
        params.permit(:user_id, :box_id, :duration)
    end
end
