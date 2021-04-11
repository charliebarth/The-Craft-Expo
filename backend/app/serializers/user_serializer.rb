class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :user_crafts, serializer: User_CraftsSerializer
  end