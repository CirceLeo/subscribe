class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :isAdmin, :total_box_cost
  has_many :subscriptions 
end
