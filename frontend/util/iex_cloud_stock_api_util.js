import { iexUrl, filter, chartInterval, includeToday } from './iex_cloud_api_util';

// test - rename to test
export const iexFetchQuote = (stockSymbol, range, interval, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?${filter}&${chartInterval}=${interval}&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);

// // quotes (i.e. range = 5m)
// export const iexFetchQuote = (stockSymbol, range, apiKey) => (
//     $.ajax({
//         method: 'GET',
//         url: iexUrl + `/stock/${stockSymbol}/chart/${range}?filter=symbol,close,date,time&token=${apiKey}`,
//         dataType: 'JSON',
//         success: function(data) {
//             console.log(data)
//         },
//         error: function(error) {
//             console.log('error:' + error)
//         }
//     })
// );

// // 1 Week (i.e. range = 5dm)
// export const iexFetchDynamicQuote = (stockSymbol, range, interval, apiKey) => (
//     $.ajax({
//         method: 'GET',
//         url: iexUrl + `/stock/${stockSymbol}/chart/${range}?${filter}&${chartInterval}${interval}&${includeToday}&token=${apiKey}`,
//         dataType: 'JSON',
//     })
// );