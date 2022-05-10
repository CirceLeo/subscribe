class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :box_id, :duration
  belongs_to :box
  # belongs_to :user
end
