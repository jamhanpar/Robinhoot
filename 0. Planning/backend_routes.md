HTML
----------------------------------------------------------------------------------------------------------
- GET / StackPagesController#root

API Endpoints
----------------------------------------------------------------------------------------------------------
users
- GET /api/users - returns user information for sign in verification
- POST /api/users - create users during sign up
- PATCH /api/users/:id - update users balance

session
- POST /api/session - log in
- DELETE /api/session - log out

stocks
- GET /api/stocks - returns list of stocks for search
- GET /api/stocks/:id - returns a specific stock for stock detail page

sectors
- GET /api/stocks/:stockId/sectors - returns a list of sectors to redirect to relevant stock details page

news
- GET /api/news - returns news to be displayed in stock details

inventory
- GET /api/inventory/users/:id - return share count owned by user
- POST /api/inventory/users/:id - update share quantity based on buy and sell

transaction_history
- GET /api/users/:userId/transaction_history - returns users previous trade transactions
- POST /api/transaction_history - logs users buying or selling stocks

historical_data
- GET /api/stocks/:stockId/historical_data - returns historical stock data for stock charts