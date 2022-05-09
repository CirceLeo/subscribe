class Subscription < ApplicationRecord
    belongs_to :user
    belongs_to :box
    validates :user_id, :box_id, presence: true
end
