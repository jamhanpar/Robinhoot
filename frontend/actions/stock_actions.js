import * as StockAPIUtil from '../util/stocks_api_util';
import * as iexCloudStockAPI from "../util/iex_cloud_stock_api_util";
import * as iexCloudAPI from "../util/iex_cloud_api_util";

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

const receiveStocks = stocks => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
});

const receiveQuotes = quotes => ({
    type: RECEIVE_QUOTES,
    quotes
});

const receiveQuote = quote => ({
    type: RECEIVE_QUOTE,
    quote
});


export const fetchStocks = () => dispatch => (
    StockAPIUtil.fetchStocks()
        .then(
            stocks => dispatch(receiveStocks(stocks))
        )
);

export const fetchStock = stockId => dispatch => (
    StockAPIUtil.fetchStock(stockId)
        .then(
            stock => dispatch(receiveStock(stock))
        )
);

export const iexFetchQuotes = (symbols, apiKey) => dispatch => (
    iexCloudAPI.iexFetchBatchQuotes(symbols, apiKey)
        .then(
            quotes => dispatch(receiveQuotes(quotes))
        )
);

export const iexFetchQuote = (symbol, apiKey) => dispatch => (
    iexCloudStockAPI.iexFetchStockQuote(symbol, apiKey)
        .then(
            quote => dispatch(receiveQuote(quote))
        )
);