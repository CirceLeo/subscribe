class Box < ApplicationRecord
    has_many :subscriptions
    has_many :users, through: :subscriptions

    validates :title, :price, :items, presence: true
    validates :price, numericality: {greater_than: 0}
end
