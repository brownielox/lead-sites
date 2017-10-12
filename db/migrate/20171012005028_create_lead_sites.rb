class CreateLeadSites < ActiveRecord::Migration[5.0]
  def change
    create_table :lead_sites do |t|
      t.float :lat
      t.float :lng
      t.string :name
      t.string :address
      t.integer :likes

      t.timestamps
    end
  end
end
