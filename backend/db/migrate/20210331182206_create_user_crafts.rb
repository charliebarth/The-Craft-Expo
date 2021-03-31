class CreateUserCrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :user_crafts do |t|
      t.integer :user_id
      t.integer :craft_id

      t.timestamps
    end
  end
end
