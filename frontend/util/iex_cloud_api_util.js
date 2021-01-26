// testing IEX Cloud API
export const iexFetchStock = (stockSymbol, apikey) => (
    $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/batch?types=quote,news,chart&range=1m&last=10&token=${apikey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// ajax call for company info - does not work
export const iexFetchStockCompany = (stockSymbol, apikey) => (
    $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/company?token=${apikey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// 