class Api::StocksController < ApplicationController
    def index
        if !params[:user_id]
            @stocks = Stock.all;
        else
            @stocks = Stock.where()

        render "api/stocks/index"
    end
    
    def show
        @stock = Stock.find_by( id: params[:id] )

        if @stock
            render "api/stocks/show"
        else
            render json: @stock.errors.full_messages, status: 401
        end
    end
end