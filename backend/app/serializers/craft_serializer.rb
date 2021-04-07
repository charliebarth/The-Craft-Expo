class CraftSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :description, :img_url, :id
end