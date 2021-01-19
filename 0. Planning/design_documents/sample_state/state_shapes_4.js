{
    entities: {
        users: {
            1: {
                id: 1,
                firstName: "John",
                lastName: "Smith",
                username: "tradingforfun",
            },
            
            2: {
                id: 2,
                firstName: "Bob",
                lastName: "Smith",
                username: "tradesforfun",
            }
        },

        stocks: {
            1: {
                id: 1,
                name: "Apple",
                ticker: "AAPL",
                price: 129.16,
            },

            2: {
                id: 2,
                name: "Visa",
                ticker: "V",
                price: 213.02,
            },

            3: {
                id: 3,
                name: "Alphabet Class A",
                ticker: "GOOGL",
                price: 1756.29,
            },

            4: {
                id: 4,
                name: "Tesla",
                ticker: "TSLA",
                price: 817.50,
            },
        },
        
        transactionHistory: {
            1: {
                id: 1,
                buyOrSell: "buy",
                mkPrice: 1756.29,
                actualShares: 10.00,
                stockId: 3,
                userId: 1,
            },
            2: {
                id: 2,
                buyOrSell: "buy",
                mkPrice: 0.00,
                actualShares: 2.00,
                stockId: 1,
                userId: 2,
            },
            3: {
                id: 3,
                buyOrSell: "sell",
                mkPrice: 129.16,
                actualShares: 1.00,
                stockId: 1,
                userId: 2,
            },
        },

        watchlists: {
            1: {
                id: 1,
                watchlist: "Watchlist",
                stockIds: [1, 2, 3, 4],
                userId: 1,
            },
            2: {
                id: 2,
                watchlist: "Watchlist",
                stockIds: [1, 2],
                userId: 2,
            }
        },
    },

    ui: {
        loading: true/false,
        modal: true/false,
    },

    errors: {
        login: ["⚠️ Unable to log in with provided credentials."],
        trade: ["Not Enough Buying Power."],
        search: ["We were unable to find any results for your search."]
    },

    session: { currentUserId: 1 }
}