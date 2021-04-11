class DemoSerializer < ActiveModel::Serializer
    attributes :name, :description, :img_url, :id
end