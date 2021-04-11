class DemosController < ApplicationController

  def index 
    demos = Demo.all
    serialized_demos = demos.map {|demo| DemoSerializer.new(demo)}
    render json: {demos: serialized_demos}, status: :accepted
  end
  
    
  # private
    
  # def craft_params
  #     params.require(:craft).permit(:name, :description, :img_url)
  # end

end
