class CreateWatchedStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :watched_stocks do |t|
      t.integer :watchlist_id, null: false
      t.string :stock_id, null: false

      t.timestamps
    end
  end
end
