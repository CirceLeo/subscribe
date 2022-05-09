class Box < ApplicationRecord
    has_many :subscriptions
    has_many :users, through: :subscriptions
end
