class Subscription < ApplicationRecord
    belongs_to :user
    belongs_to :box
    validates :user_id, :box_id, presence: true
    validates :user_id, uniqueness: {scope: :box_id, message: ": You're already subscribed to this box!"}

    def remaining_boxes
        # time_to_now = Time.current - self.created_at
        months_since_created = ((Time.current - self.created_at) / 1.month ).round
        duration - months_since_created
    end
end
