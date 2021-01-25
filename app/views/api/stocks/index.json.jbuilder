@stocks.each do |stock|
    json.set! stock.id do
        json.partial! 'stock', stock: stock
    end
end