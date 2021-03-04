class Api::WatchedStocksController < ApplicationController
    def create
        @watched_stock = WatchedStock.new(watched_stocks_params)

        if @watched_stock.save
            render "api/watched_stocks/show"
        else
            render json: "Stock was not added to the list", status: 422
        end
    end

    def index
        @watched_stocks = WatchedStock.all
        # @watched_stocks = WatchedStock.where(watchlist_id: 1);

        render "api/watched_stocks/index"
    end
    
    def show
    end

    # used to remove a stock from a watchlist
    def destroy
        @watched_stock = WatchedStock.find_by( stock_symbol: params[:stock_symbol] )
        if @watched_stock.destroy
            render "api/watched_stocks/show"
        else
            render json: "Stock was not removed from the watchlist", status: 422
        end        
    end

    private

    def watched_stocks_params
        params.require(:watched_stocks.permit(:watchlist_id, :stock_symbol)
    end
end