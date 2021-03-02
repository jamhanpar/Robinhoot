class Watchlist < ApplicationRecord
    validates :user_id, :watchlist, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :stocks,
        foreign_key: :watchlist_id,
        class_name: :WatchedStocks
end
