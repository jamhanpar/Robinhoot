class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.string :watchlist, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
