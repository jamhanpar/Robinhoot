class WatchedStock < ApplicationRecord
    belongs_to :watchlist,
        foreign_key: :watchlist_id,
        class_name: :Watchlist
end
