class Stock < ApplicationRecord
    validates :name, :ticker, presence: true, uniqueness: true

end