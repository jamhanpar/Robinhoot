class Api::WatchedStocksController < ApplicationController
    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist[:user_id] = current_user.id

        if @watchlist.save
            render "api/users/show"
        else
            # render json: [
            #     "Please enter your first name.",
            #     "Please enter your last name.",
            #     "Please enter your email.",
            #     "Your password must be at least 10 characters."
            # ], status: 422
        end
    end

    def index
        @watched_stocks = WatchedStock.all
        # @watched_stocks = WatchedStock.where(watchlist_id: 1);

        render "api/watched_stocks/index"
    end
    
    def show
    end

    def destroy
    end

    private

    def watchlist_params
        params.require(:watchlist).permit(:watchlist_name)
    end
end