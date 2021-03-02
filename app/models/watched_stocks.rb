class WatchedStocks < ApplicationRecord
    validates :watchlist_id, :stock_id, presence: true

    belongs_to :watchlist,
        foreign_key: :watchlist_id,
        class_name: :Watchlist

    belongs_to :stocks,
        foreign_key: :stock_id,
        class_name: :Stock
end
