class CreateDemos < ActiveRecord::Migration[6.0]
  def change
    create_table :demos do |t|
      t.string :name
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
