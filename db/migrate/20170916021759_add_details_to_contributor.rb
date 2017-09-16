class AddDetailsToContributor < ActiveRecord::Migration[5.0]
  def change
    add_column :contributors, :lat, :float
    add_column :contributors, :lng, :float
    add_column :contributors, :reading, :float
  end
end
