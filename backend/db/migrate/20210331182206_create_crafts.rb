class CreateCrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :crafts do |t|
      t.integer :user_id
      t.string :name
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
