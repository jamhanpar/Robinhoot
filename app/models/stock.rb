class Stock < ApplicationRecord
    validates :name, :ticker, presence: true, uniqueness: true

    has_many :portfolios,
        foreign_key: :stock_id,
        class_name: :Portfolio

    has_many :owners,
        through: :portfolios,
        source: :user
end