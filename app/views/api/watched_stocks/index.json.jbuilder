@watched_stocks.each do |watched_stock|
    json.set! watched_stock.id do
        json.partial! 'watched_stock', watched_stock: watched_stock
    end
end