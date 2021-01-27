import { iexUrl } from './iex_cloud_api_util';

// test - rename to test
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

// quotes (i.e. range = 5m)
export const iexFetchQuote = (stockSymbol, range, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?filter=symbol,close,date,time&token=${apiKey}`,
        dataType: 'JSON',
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log('error:' + error)
        }
    })
);