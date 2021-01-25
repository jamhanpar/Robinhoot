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

demo = User.create!(
    first_name: 'John',
    last_name: 'Smith',
    email: 'demo',
    password: 'password'
)

test = User.create!(
    first_name: 'John',
    last_name: 'Smith',
    email: 'John@Smith.com',
    password: '123456'
)
  
aapl = Stock.create!(
    name: 'Apple',
    ticker: 'AAPL'
)

visa = Stock.create!(
    name: 'Visa',
    ticker: 'V'
)

tsla = Stock.create!(
    name: 'Tesla',
    ticker: 'TSLA'
)

googl = Stock.create!(
    name: 'Alphabet Class A',
    ticker: 'GOOGL'
)