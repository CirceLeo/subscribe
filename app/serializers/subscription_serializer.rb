class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :box_id, :duration, :created_at, :remaining_boxes
  belongs_to :box
  # belongs_to :user
end
