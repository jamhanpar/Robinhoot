import { iexUrl } from './iex_cloud_api_util';

const filter = "filter=symbol,close,date,minute,label";

// test - rename to test
export const iexFetchStockQuote = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/quote?token=${apiKey}`,
    })
);

// dynamic chart quotes (i.e. range = 5m)
export const iexFetchSymbolPrices = (stockSymbol, range, interval, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/chart/${range}?${filter}&chartInterval=${interval}&token=${apiKey}`,
        dataType: 'JSON',
    })
);

// requesting chart data for multiple stock symbols
export const iexFetchBatchPrices = (stockSymbols, range, interval, apiKey) => (
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
export const fetchCompany = (stockSymbol, apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/${stockSymbol}/company?token=${apiKey}`,
    })
);