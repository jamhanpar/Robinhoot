class Api::SessionController < ApplicationController
    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["Noone signed in"], status: 404
        end
    end
end
