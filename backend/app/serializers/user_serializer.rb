class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :crafts, serializer: CraftSerializer
  end