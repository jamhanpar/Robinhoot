class Api::StocksController < ApplicationController
    def index
        @stocks = Stock.all;

        render "api/stocks/show"
    end
    
    def show
        @stock = Stock.find_by( params[:stock][:ticker] )

        if @stock
            render "api/stocks/show"
        else
            render json: @stock.errors.full_messages, status: 401
        end
    end
end