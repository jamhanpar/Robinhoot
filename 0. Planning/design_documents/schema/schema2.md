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


## `transaction_history`
| Column Name   | Data Type | Details               | Description                                                                                                                 |
|---------------|-----------|-----------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `id`            | integer   | not null, primary key | Trade log id                                                                                                                |
| `buy_or_sell`   | string    | not null              | Indicator of buying stock or selling stock, options are: 'buy' or 'sell'                                                    |
| `mkt_price`     | float     | not null              | Current stock price                                                                                                         |
| `actual_shares` | float     | not null              | # of shares actually purchased or sold                                                                                      |
| `ticker`        | string    | not null, foreign key | stock symbol purchased                                                                                                      |
| `user_id`       | integer   | not null, foreign key | ID of logged in user                                                                                                        |
| `created_at`    | datetime  | not null              | Automatic timestamp                                                                                                         |
| `updated_at`    | datetime  | not null              | Automatic timestamp                                                                                                         |

* `user_id` references `users`
* `ticker` references `stocks`