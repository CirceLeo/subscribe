class BoxesController < ApplicationController
    before_action :find_box, only: [:show, :update, :destroy]
    # before_action :admin_authorize, except: [:index, :show]
    # skip_before_action :admin_authorize, only: :index, :show

    skip_before_action :user_authorize, only: [:index, :show, :high_to_low]

    def create
        box = Box.create!(box_params)
        render json: box, status: :created
    end

    def show
        render json: @box, status: :ok
    end

    def index
        render json: Box.all.sort_by(&:price), status: :ok
    end

    def high_to_low
        render json: Box.all.sort_by(&:price).reverse!, status: :ok
    end

    def update
        @box.update(box_params)
        render json: @box, status: :accepted
    end

    def destroy
        @box.destroy
        render json: {}, status: 204
        # head :no_content, status: 204
    end

    private
    def find_box
        @box = Box.find(params[:id])
    end
    def box_params
        params.permit(:price, :title, :description, :items, :image_url)
    end
end
