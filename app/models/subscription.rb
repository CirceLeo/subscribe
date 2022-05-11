class Subscription < ApplicationRecord
    belongs_to :user
    belongs_to :box
    validates :user_id, :box_id, presence: true
    validates :user_id, uniqueness: {scope: :box_id, message: ": You're already subscribed to this box!"}
end
