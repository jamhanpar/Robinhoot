## `users`
| Column Name      | Data Type | Details                   | Description                 |
|------------------|-----------|---------------------------|-----------------------------|
| `id`             | integer   | not null, primary key     | User's unique id            |
| `first_name`     | string    | not null                  | User's first name           |
| `last_name`      | string    | not null                  | User's last name            |
| `username`       | string    | not null, indexed, unique | User's username             |
| `email`          | string    | not null, indexed, unique | User's email                |
| `password_digest`| string    | not null                  | User's encrypted password   |
| `session_token`  | string    | not null, indexed, unique | User's unique session token |
| `balance`        | float     | not null                  | User's buying power         |
| `created_at`     | datetime  | not null                  | Automatic timestamp         |
| `updated_at`     | datetime  | not null                  | Automatic timestamp         |

* index on `username, unique: true`
* index on `email, unique: true`
* index on `session_token, unique: true`


## `stocks`
| Column Name          | Data Type | Details                   | Description                                      |
|----------------------|-----------|---------------------------|--------------------------------------------------|
| `id`                   | integer   | not null, primary key     | Stock internal ID                                |
| `name`                 | string    | not null, indexed, unique | Stock name                                       |
| `ticker`               | string    | not null, indexed, unique | Stock ticker symbol                              |
| `created_at`           | datetime  | not null                  | Automatic timestamp                              |
| `updated_at`           | datetime  | not null                  | Automatic timestamp                              |

* index on `name, unique: true`
* index on `ticker, unique: true`
* Note: will be utilizing IEX Cloud api for other stock related info such as "CEO, location, employee count, and etc."


## `portfolio`
| Column Name | Data Type | Details               | Description                                    |
|-------------|-----------|-----------------------|------------------------------------------------|
| `id`          | integer   | not null, primary key |                                                |
| `user_id`     | integer   | not null              | User that owns this specific stock ticker      |
| `ticker`      | string    | not null              | Ticker symbol of the stock share that is owned |
| `qty_owned`   | integer   | not null              | Quantity of stock shares owned by user         |

* `user_id` references `users`
* `ticker` references `stocks`


## `news`
| Column Name | Data Type | Details               | Description                  |
|-------------|-----------|-----------------------|------------------------------|
| `id`          | integer   | not null, primary key |                              |
| `source`      | string    | not null              | News article source name     |
| `timePosted`  | datetime  | not null              | Article published date       |
| `title`       | string    | not null              | Title of news article        |
| `summary`     | string    | not null              | Short summary of the article |
| `url`         | string    | not null              | Url of the article           |


## `transaction_history`
| Column Name   | Data Type | Details               | Description                                                                                                                 |
|---------------|-----------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `id`            | integer   | not null, primary key | Trade log id                                                                                                                |
| `order_type`    | string    | not null              | Type of order: market order (default), limit order, stop loss order, stop limit order, trailing stop order, recurring order |
| `buy_or_sell`   | string    | not null              | Indicator of buying stock or selling stock, options are: 'buy' or 'sell'                                                    |
| `invested_in`   | string    | not null              | Invested in: 1) shares 2) dollars                                                                                           |
| `shares`        | integer   | not null              | # of shares purchased by user input                                                                                         |
| `mkt_price`     | float     | not null              | Current stock price                                                                                                         |
| `est_cost`      | float     | not null              | Cost of # of shares purchased                                                                                               |
| `amount`        | float     | not null              | $ amount of how much to invest                                                                                              |
| `est_quantity`  | float     | not null              | # of shares calculated based on desired $ amount of investment                                                              |
| `est_credit`    | float     | not null              | $ amount after x # of shares were sold                                                                                      |
| `actual_shares` | float     | not null              | # of shares actually purchased or sold                                                                                      |
| `ticker`        | string    | not null, foreign key | stock symbol purchased                                                                                                      |
| `user_id`       | integer   | not null, foreign key | ID of logged in user                                                                                                        |
| `created_at`    | datetime  | not null              | Automatic timestamp                                                                                                         |
| `updated_at`    | datetime  | not null              | Automatic timestamp                                                                                                         |

* `user_id` references `users`
* `ticker` references `stocks`

## `historical_data`
| column name | data type | details               | description                                  |
|-------------|-----------|-----------------------|----------------------------------------------|
| `id`          | integer   | not null, primary key |                                              |
| `ticker`      | string    | not null              | Stock ticker                                 |
| `date`        | datetime  | not null              | Date of stock price                          |
| `time`        | datetime  | not null              | Time in hours                                |
| `open`        | float     | not null              | Opening price in the given timeframe         |
| `high`        | float     | not null              | Highest price in the given timeframe         |
| `low`         | float     | not null              | Lowest price in the given timeframe          |
| `close`       | float     | not null              | Closing price in the given timeframe         |
| `volume`      | integer   | not null              | Average volume traded in the given timeframe |
| `created_at`  | datetime  | not null              | Automatic timestamp                          |
| `updated_at`  | datetime  | not null              | Automatic timestamp                          |