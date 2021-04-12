class DemosController < ApplicationController
  skip_before_action :authorized, only: [:index]
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
