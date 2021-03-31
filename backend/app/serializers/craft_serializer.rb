class CraftSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :description
end