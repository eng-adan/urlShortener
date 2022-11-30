class CreateLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :links do |t|
      t.text :actual_url
      t.text :lookup_code
      t.integer :clicks

      t.timestamps
    end
  end
end
