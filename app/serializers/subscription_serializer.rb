class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :box_id, :duration
  belongs_to :box
  # belongs_to :user
end
