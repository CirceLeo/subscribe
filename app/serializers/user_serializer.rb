class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :isAdmin
  has_many :subscriptions 
end
