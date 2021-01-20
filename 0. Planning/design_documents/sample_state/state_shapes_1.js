// delete 'const a ='
const a = {
    entities: {
        users: {
            1: {
                id: 1,
                firstName: "John",
                lastName: "Smith",
                username: "tradingforfun",
                passwordDigest: "342lifavoj43r982jou1fjv",
                sessionToken: "aflsk;jflqmf2109841812039mk",
                balance: 25000.00,

                imgUrl: null               // (to PM: this indicates default picture to be used on frontend)
            },
            
            2: {
                id: 2,
                firstName: "Bob",
                lastName: "Smith",
                username: "tradesforfun",
                passwordDigest: "s3489jf28j1j1lkjf1l1",
                sessionToken: "d425k34lkmf0923lkr02f02m2lkjf2klj",
                balance: 100000.00
            }
        },

        stocks: {
            1: {
                id: 1,
                name: "Apple",
                ticker: "AAPL",
                price: 129.16,
                ceo: "Timothy Donald Cook",
                employees: 147000,
                headquarters: "Cupertino, California",
                foundedYr: 1976,
                mktCap: 2190000000000,
                peRatio: 40.32,
                divYld: 0.61,
                avgVol: 119500000,
                description: "Apple, Inc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sectorId: 1,
            },

            2: {
                id: 2,
                name: "Visa",
                ticker: "V",
                price: 213.02,
                ceo: "Alfred F. Kelly",
                employees: 20500,
                headquarters: "San Francisco, California",
                foundedYr: 1958,
                mktCap: 499210000000,
                peRatio: 45.72,
                divYld: 0.56,
                avgVol: 7850000,
                description: "Visa, Inc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sectorId: 2,
            },

            3: {
                id: 3,
                name: "Alphabet Class A",
                ticker: "GOOGL",
                price: 1756.29,
                ceo: "Sundar Pichai",
                employees: 118899,
                headquarters: "Mountain View, California",
                foundedYr: 2015,
                mktCap: 1170000000000,
                peRatio: 35.90,
                divYld: 0.00,
                avgVol: 1520000,
                description: "Alphabet Class A, also known as Google. A Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sectorId: 3,
            },

            4: {
                id: 4,
                name: "Tesla",
                ticker: "TSLA",
                price: 817.50,
                ceo: "Elon Reeve Musk",
                employees: 48016,
                headquarters: "Palo Alto, California",
                foundedYr: 2003,
                mktCap: 692670000000000,
                peRatio: 1760,
                divYld: 0.00,
                avgVol: 45590000,
                description: "Tesla, Inc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sectorId: 4,
            },
        },

        sectors: {
            1: {
                id: 1,
                sectorsName: "technology",
            },

            2: {
                id: 2,
                sectorsName: "financial",
            },

            3: {
                id: 3,
                sectorsName: "communication services",
            },

            4: {
                id: 4,
                sectorsName: "automotive",
            },
        },

        news: {
            1: {
                id: 1,
                source: "Reuters",
                timePosted: "6h",
                title: "Analysis: Tesla's Model Y to emerge disruptor as China EV sales zoom in 2021",
                summary: "BEIJING/SHANGHAI (Reuters) - New models will help electric vehicle sales in China zoom this year, after tepid business in a virus-riddled 2020, and analysts predict Tesla’s Model Y pricing will emerge as a major disruptor in the world’s biggest car market.",
                url: "https://www.reuters.com/article/us-china-autos-tesla/analysis-teslas-model-y-to-emerge-disruptor-as-china-ev-sales-zoom-in-2021-idUSKBN29G2SB?il=0",
            },

            2: {
                id: 2,
                source: "Bezinga",
                timePosted: "7h",
                title: "Elon Musk Teases Tesla AI Day",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                url: "https://finance.yahoo.com/news/elon-musk-teases-tesla-ai-220639055.html?.tsrc=rss",
            }
        },
        
        tradingLog: {
            1: {
                id: 1,
                orderType: "market order",
                buyOrSell: "buy",
                investedIn: "shares",
                shares: 10,
                mkPrice: 1756.29,
                estCost: 17562.90,
                amount: 0.00,
                estQuantity: 0.00,
                estCredit: 0.00,
                actualShares: 10.00,
                ticker: "GOOGL",
                userID: 1,
            },
            2: {
                id: 2,
                orderType: "market order",
                buyOrSell: "buy",
                investedIn: "dollars",
                shares: 0,
                mkPrice: 0.00,
                estCost: 0.00,
                amount: 258.32,
                estQuantity: 2.00,
                estCredit: 0.00,
                actualShares: 2.00,
                ticker: "AAPL",
                userID: 2,
            },
            3: {
                id: 3,
                orderType: "market order",
                buyOrSell: "sell",
                investedIn: "shares",
                shares: 1,
                mkPrice: 129.16,
                estCost: 0.00,
                amount: 0.00,
                estQuantity: 1.00,
                estCredit: 129.16,
                actualShares: 1.00,
                ticker: "AAPL",
                userID: 2,
            }
        },

        historicalData: {
            1: {
                ticker: "AAPL",
                date: 1/11/2021,
                time: 9:00 AM,
                close: 129.16,
            },

            2: {
                ticker: "AAPL",
                date: 1/11/2021,
                time: 9:30 AM,
                close: 130.64,
            },

            3: {
                ticker: "AAPL",
                date: 1/11/2021,
                time: 6:00 PM,
                close: 132.18,
            },

            4: {
                ticker: "V",
                date: 1/11/2021,
                time: 10:00 AM,
                close: 213.02,
            },

            5: {
                ticker: "V",
                date: 1/11/2021,
                time: 10:05 AM,
                close: 213.58,
            },

            6: {
                ticker: "V",
                date: 1/11/2021,
                time: 10:10 AM,
                close: 214.15,
            }
        },
    },

    ui: {
        // if you need to load anything
        // used for loading images
        loading: true/false,
        // if you need a popup form that covers up the entire page (sign up forms)
        modal: true/false,
        // if you have any videos or music playing
        currentMedia: 2,
        currentTime: 201
    },

    errors: {
        // one error slice (aka login: [""]) per page
        // multiple errors should be in 1 array
        login: ["⚠️ Unable to log in with provided credentials."],
        trade: ["Not Enough Buying Power."],
        search: ["We were unable to find any results for your search."]
    },

    session: { currentUserId: 1 }
}