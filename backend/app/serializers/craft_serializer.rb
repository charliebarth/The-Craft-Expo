class CraftSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :description, :image_link, :id
end