HTML
----------------------------------------------------------------------------------------------------------
- `GET /` `StackPagesController#root`

API Endpoints
----------------------------------------------------------------------------------------------------------
`users`
- `GET /api/users` - returns user information for sign in verification
- `POST /api/users` - create users during sign up
- `PATCH /api/users/:id` - update users balance

`session`
- `POST /api/session` - log in
- `DELETE /api/session` - log out

`stocks`
- `GET /api/stocks` - returns list of stocks for search
- `GET /api/stocks/:id` - returns a specific stock for stock detail page

`portfolio`
- `GET /api/user/:userId/portfolio` - returns a list of stocks owned by the user
- `POST /api/portfolio` - adds new stocks owned by the user

`watchlist`
- `GET /api/watchlist` - returns a list of stocks on a users watchlist
- `POST /api/watchlist` - creates a new watchlist

`transaction_history`
- `GET /api/transaction_history` - returns users previous trade transactions
- `POST /api/transaction_history` - logs users buying or selling stocks

`historical_data`
- `GET /api/stocks/:stockId/historical_data` - returns historical stock data for stock charts``