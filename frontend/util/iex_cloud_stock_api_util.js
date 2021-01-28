import { iexUrl, filter } from './iex_cloud_api_util';

// test - rename to test
export const iexFetchBatchQuotes = (stockSymbols, range, interval, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/market/batch?
            types=charts&
            symbols=${stockSymbols}&
            ${filter}&
            range=${range}&
            chartInterval=${interval}&
            token=${apiKey}`,
    })
);

// // dynamic chart quotes (i.e. range = 5m)
export const iexFetchSymbolQuote = (stockSymbol, range, interval, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?${filter}&chartInterval=${interval}&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// // requesting chart data for multiple stock symbols
// export const iexFetchBatchQuotes = (stockSymbols, range, interval, apiKey) => (
//     $.ajax({
//         method: 'GET',
//         url: iexUrl + `/stock/market/batch?
//             types=charts&
//             symbols=${stockSymbols}&
//             ${filter}&
//             range=${range}&
//             chartInterval=${interval}&
//             token=${apiKey}`,
//     })
// );