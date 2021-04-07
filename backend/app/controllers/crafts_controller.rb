class CraftsController < ApplicationController
    before_action :find_craft, only: [:update]

    def create
        craft = Craft.create(craft_params)
        render json: CraftSerializer.new(craft).serializable_hash
    end

    def index 
        crafts = Craft.all
        render json: CraftSerializer.new(crafts).serializable_hash
    end
  
    def update
      if @craft
        if @craft.update(craft_params)
          render json: CraftSerializer.new(@craft)
        else
          render json: {error: @craft.errors.full_messages, status: 400}, status: 400
        end
      else
        render json: {error: "Sorry, there is no craft with that ID", status: 400}, status: 400
      end
    end
  
  
    
    private

    def find_craft
      @craft = Craft.find_by_id(params[:id])
    end
    
    def craft_params
        params.require(:craft).permit(:name, :description, :img_url)
    end
end
