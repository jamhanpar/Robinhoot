import { iexUrl, filter } from './iex_cloud_api_util';

// test - rename to test
export const fetchCompany = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/company?token=${apiKey}`,
    })
);

// dynamic chart quotes (i.e. range = 5m)
export const iexFetchSymbolQuote = (stockSymbol, range, interval, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?${filter}&chartInterval=${interval}&token=${apiKey}`,
        dataType: 'JSON',
    })
);

// requesting chart data for multiple stock symbols
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

// search stock name or ticker
export const fetchSearch = (fragment, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/search/${fragment}?token=${apiKey}`,
    })
);

// stock company info