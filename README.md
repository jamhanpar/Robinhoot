# Robinhoot
Robinhoot is a full stack, single page rails project inspired by Robinhood. Robinhoot utilizes IEX Cloud API to render stock information such as historical charts, relevant news or corporate information. After logging in or signing up, users can manage their portfolio using real-time data, search for stocks, add stocks to their watchlist and simulate trades.

# Demo
Here is a working live demo: https://robinhoot.herokuapp.com/#/

# App Features
### Landing Page
Users can either create an account using the sign up links or log in to an existing account using the login link. Information on the splash page has been populated using information from the actual Robinhood website.

![alt text](http://url/to/img.png)

### Frontend Auth
Users can sign up and will return errors if missing critical information necessary for registering a user. The login page will allow users to access existing accounts, but for the purpose of demonstration and having access to the app features, a demo account is available.

![alt text](http://url/to/img.png)

### Dynamic Portfolio Dashboard - Work in Progress
The dashboard displays a graphical representation of the users portfolio based on real-time price adjustments for the stocks the user owns. You can modify the display based on a selected timeframe. Users can increase their current buying power by adding more funds to their account. As for the watchlist on the right, you can view the users currently owned stocks, # of shares, daily price action, price fper share and the daily percent change per share.

![alt text](http://url/to/img.png)

### Search Stock Symbols - Work in Progress
Users can search by typing out a stock symbol or company name, and the search results will update in real-time based on user input.

![alt text](http://url/to/img.png)

### Stock Details Page - Work in Progress
The stock details page will display a graphical representation of the stocks real-time price action based on a selected timeframe (default being 1D). Users can access company information as well as relevant news for the current stock.

![alt text](http://url/to/img.png)

### Trade Simulation - Work in Progress
On the stocks details page, users can simulating buying shares in dollars or shares based on current stock price. If the user owns any shares, the user can simulate selling the stocks they own.

![alt text](http://url/to/img.png)

# Features in the Works
* Risk analysis based on % of funds allocated to each stock sectors 

# Dependencies & Version
* Ruby 2.5.1
* Rails 5.2.4.4
* React.js 17.0.1
* Recharts 2.0.3
* Redux.js 4.0.5
* Redux Thunk 2.3.0
* Babel Loader 8.2.2
* PostgresSQL
* Webpack 4.44.2
* Heroku

# Languages / Libraries
* Ruby
* HTML
* CSS
* JavaScript
     * jQuery 
     * Ajax

# APIs and External Libraries
* IEX Cloud API - stock api
* Recharts 2.0.3 - graphing data
* FreeLogoDesign.org - logos and icons
* Unsplash.com - site images

# Configuration

# Database creation

# Database initialization

# How to run the test suite

# Deployment instructions
