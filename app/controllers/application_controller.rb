class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Helper methods
  helper_method :current_user_session, :current_user

  private

  def current_user_session
    @current_user_session ||= UserSession.find
  end

  def current_user
    @current_user = current_user_session && current_user_session.user
  end

  def require_login
    redirect_to login_path unless current_user
  end

  def require_logout
    redirect_to root_path if current_user
  end
end
