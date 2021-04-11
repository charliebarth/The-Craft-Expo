class CreateUserCrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :user_crafts do |t|
      t.integer :user_id
      t.string :name
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
