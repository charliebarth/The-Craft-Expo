class User < ApplicationRecord
    has_secure_password
    
    has_many :user_crafts
    has_many :crafts, through: :user_crafts
end
