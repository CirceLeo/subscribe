class CreateSubscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id
      t.integer :box_id
      t.integer :duration

      t.timestamps
    end
  end
end
