class BoxSerializer < ActiveModel::Serializer
  attributes :id, :price, :title, :description, :items
end
