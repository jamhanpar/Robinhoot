class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )

      debugger
  
      if @user
        debugger
        login(@user)
        render "api/users/show"
      else
        debugger
        render json: ["Unable to log in with provided credentials."], status: 401
      end
    end
    
    def destroy
        @user = current_user

        if @user
            logout
            render "api/users/show"
        else
            render json: ["No one is logged in"], status: 404
        end
    end
end