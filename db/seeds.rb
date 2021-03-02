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

# reset id to 1 before seeding
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('stocks')
ActiveRecord::Base.connection.reset_pk_sequence!('portfolios')

demo = User.create!(
    first_name: 'John',
    last_name: 'Smith',
    email: 'demo',
    password: 'password',
    funds: 10000.00
)

test = User.create!(
    first_name: 'Jimmy',
    last_name: 'Smith',
    email: 'Jimmy@Smith.com',
    password: '123456',
    funds: 0.0
)
  
aapl = Stock.create!( name: 'Apple', ticker: 'AAPL' )
visa = Stock.create!( name: 'Visa', ticker: 'V' )
tsla = Stock.create!( name: 'Tesla', ticker: 'TSLA' )
googl = Stock.create!( name: 'Alphabet Class A', ticker: 'GOOGL' )


portfolio = Portfolio.create!(
    user_id: 1,
    stock_id: 2,
    qty_owned: 2,
)

portfolio_1 = Portfolio.create!(
    user_id: 1,
    stock_id: 1,
    qty_owned: 1,
)

portfolio_4 = Portfolio.create!(
    user_id: 1,
    stock_id: 3,
    qty_owned: 4,
)

portfolio_3 = Portfolio.create!(
    user_id: 2,
    stock_id: 1,
    qty_owned: 2,
)

portfolio_3 = Portfolio.create!(
    user_id: 2,
    stock_id: 2,
    qty_owned: 4,
)

watchlist = Watchlist.create!(watchlist_name: "My First List", user_id: 1)
watchlist = Watchlist.create!(watchlist_name: "My First List", user_id: 2)