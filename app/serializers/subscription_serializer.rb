class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :box_id, :duration
end
