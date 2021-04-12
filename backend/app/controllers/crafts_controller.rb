class CraftsController < ApplicationController
  def create
    byebug
        #user = User.find_by(username: craft_params[:username])
        #demo = Demo.find_by(name: craft_params[:demo_name])
        craft = Craft.create(
          name: craft_params["name"], 
          description: craft_params["description"],
          img_url: craft_params["img_url"],
          user_id: current_user.id,
        )
    
        if craft.valid?
          render json: { craft: CraftSerializer.new(craft) }, status: :created
        else
          render json: { error: 'failed to create craft', messages: craft.errors.full_messages }, status: :not_acceptable
        end
  end

  def index 
        #user = User.find_by(username: craft_params[:username])
        crafts = Craft.where(user_id: current_user.id)
        #crafts = Craft.find_by(current_user.id)
        serialized_crafts = crafts.map {|craft| CraftSerializer.new(craft)}
        render json: {crafts: serialized_crafts}, status: :accepted
  end

  def destroy
        craft = Craft.find_by_id(params[:id])
    
        if craft
          Craft.destroy
          render json: { message: 'Craft deleted'}, status: :accepted
        else
          render json: { error: 'Craft not found' }, status: :not_acceptable
        end
  end

  private

  def craft_params
      params.require(:craft).permit(:name, :description, :id, :img_url, :demo_name, :username, :user_id)
  end
  
  # def serialize_mapper(name)
  #     demo = Demo.find_by(name: name)
  #     crafts = Craft.where(demo_id: demo.id)
  #     crafts.map {|craft| CraftSerializer.new(craft)}
  # end
end
