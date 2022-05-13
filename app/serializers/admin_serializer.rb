class AdminSerializer < ActiveModel::Serializer
  attributes :id, :price, :title, :description, :items, :image_url
  has_many :subscriptions
end
