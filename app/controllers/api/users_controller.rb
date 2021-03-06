class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      team = Team.create(name: 'First Team')
      TeamMembership.create(user_id: @user.id, team_id: team.id)
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
       render :show
    else
      render json: ["not found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first, :last)
  end

  # def team_membership_params
  #   params.require(:user).permit(:team_id, :role, :depart, :pronouns, :about_me)
  # end

end
