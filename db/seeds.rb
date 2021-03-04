# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# SEEDS
User.delete_all
Stock.delete_all
Portfolio.delete_all
Watchlist.delete_all
WatchedStock.delete_all

# reset id to 1 before seeding
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('stocks')
ActiveRecord::Base.connection.reset_pk_sequence!('portfolios')
ActiveRecord::Base.connection.reset_pk_sequence!('watchlists')
ActiveRecord::Base.connection.reset_pk_sequence!('watched_stocks')

demo = User.create!(
    first_name: 'John',
    last_name: 'Smith',
    email: 'demo',
    password: 'password',
    funds: 10000.00
)

test = User.create!(
    first_name: 'John',
    last_name: 'Smith',
    email: 'John@Smith.com',
    password: '123456',
    funds: 0.0
)
  
aapl = Stock.create!( name: 'Apple', ticker: 'AAPL' )
visa = Stock.create!( name: 'Visa', ticker: 'V' )
tsla = Stock.create!( name: 'Tesla', ticker: 'TSLA' )
googl = Stock.create!( name: 'Alphabet Class A', ticker: 'GOOGL' )

portfolio = Portfolio.create!(user_id: 1, stock_id: 2, qty_owned: 2)
portfolio_1 = Portfolio.create!(user_id: 1, stock_id: 1, qty_owned: 1)
portfolio_4 = Portfolio.create!(user_id: 1, stock_id: 3, qty_owned: 4)
portfolio_3 = Portfolio.create!(user_id: 2, stock_id: 1, qty_owned: 2)
portfolio_3 = Portfolio.create!(user_id: 2, stock_id: 2, qty_owned: 4)

watchlist = Watchlist.create!(watchlist_name: "My First List", user_id: 1)
watchlist_1 = Watchlist.create!(watchlist_name: "My First List", user_id: 2)

watchedStocks = WatchedStock.create!(watchlist_id: 1, stock_symbol: "AAPL")
watchedStocks_1 = WatchedStock.create!(watchlist_id: 1, stock_symbol: "TSLA")
watchedStocks_3 = WatchedStock.create!(watchlist_id: 1, stock_symbol: "NFLX")
watchedStocks_4 = WatchedStock.create!(watchlist_id: 2, stock_symbol: "MSFT")
watchedStocks_5 = WatchedStock.create!(watchlist_id: 2, stock_symbol: "DIS")
watchedStocks_6 = WatchedStock.create!(watchlist_id: 2, stock_symbol: "GME")