class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.integer :qty_owned, null: false

      t.timestamps
    end
  end
end
