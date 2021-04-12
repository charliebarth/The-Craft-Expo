class CraftSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :name, :description, :img_url
    belongs_to :user, serializer: UserSerializer
end