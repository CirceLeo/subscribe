class CreateBoxes < ActiveRecord::Migration[7.0]
  def change
    create_table :boxes do |t|
      t.float :price
      t.string :title
      t.string :description
      t.string :items

      t.timestamps
    end
  end
end
