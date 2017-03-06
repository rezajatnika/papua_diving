class UserSessionsController < ApplicationController
  layout 'session'

  # GET /login
  def new
    @user_session = UserSession.new
  end

  # POST /login
  def create
    @user_session = UserSession.new(user_session_params)
    if @user_session.save
      redirect_to root_path
    else
      puts @user_session.errors
      render action: :new
    end
  end

  # /DELETE /logout
  def destroy
    current_user_session.destroy
    redirect_to login_path
  end

  private

  # Secure parameters
  def user_session_params
    params.require(:user_session).permit(:email, :password)
  end
end
