class BoxesController < ApplicationController
    before_action :find_box, only: [:show, :update, :destroy]
    def create
        box = Box.create!(box_params)
        render json: box, status: :created
    end
    def show
        render json: @box, status: :ok
    end
    def index
        render json: Box.all, status: :ok
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
        params.permit(:price, :title, :description, :items)
    end
end
