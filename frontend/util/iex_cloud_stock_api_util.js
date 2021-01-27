// quotes (i.e. range = 5m)
export const iexFetchQuote = (stockSymbol, range, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?filter=symbol,volume,lastSalePrice&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);