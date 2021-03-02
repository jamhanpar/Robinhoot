class Api::WatchlistsController < ApplicationController
    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist[:user_id] = current_user.id

        if @watchlist.save
            # login(@user)
            # render "api/users/show"
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
        @watchlists = Watchlist.all;

        # render "api/stocks/index"
    end
    
    def show
        # @stock = Stock.find_by( id: params[:id] )

        # if @stock
        #     render "api/stocks/show"
        # else
        #     render json: @stock.errors.full_messages, status: 401
        # end
    end

    def destroy
        # @user = current_user

        # if @user
        #     logout
        #     render "api/users/show"
        # else
        #     render json: ["No one is logged in"], status: 404
        # end
    end

    private

    def watchlist_params
        params.require(:watchlist).permit(:watchlist_name)
    end
end