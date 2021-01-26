const iexUrl = "https://sandbox.iexapis.com/stable"

// testing IEX Cloud API
export const iexFetchStock = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/batch?types=quote,news,chart&range=1m&last=10&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// quotes (i.e. range = 5m)
export const iexFetchQuote = (stockSymbol, range, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// company info
export const iexFetchCompany = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/company?token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// news
export const iexFetchNews = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/batch?types=news&range=1m&last=15&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// prices
export const iexFetchPrices = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/batch?types=news&range=1m&last=15&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);