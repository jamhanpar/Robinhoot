class Api::WatchlistsController < ApplicationController
    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist[:user_id] = current_user.id

        if @watchlist.save
            render "api/watchlists/show"
        else
            render json: "Watchlist was not created", status: 422
        end
    end

    def index
        @watchlists = current_user.watchlists;

        render "api/watchlists/index"
    end

    # add if time permits, used to rename a list
    def update
    end

    # add if time permits, used to delete a list
    def destroy
        
    end

    private

    def watchlist_params
        params.require(:watchlist).permit(:watchlist_name)
    end
end