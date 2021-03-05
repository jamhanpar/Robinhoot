import * as StockAPIUtil from '../util/stocks_api_util';
import * as iexCloudStockAPI from "../util/iex_cloud_stock_api_util";

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';

const receiveStocks = stocks => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
});

const receiveQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote,
});


export const fetchStocks = () => dispatch => (
    StockAPIUtil.fetchStocks()
        .then(
            stocks => (dispatch(receiveStocks(stocks))),
            error => (dispatch(receiveErrors(error.responseJSON)))
        )
);

export const fetchStock = stockId => dispatch => (
    StockAPIUtil.fetchStock(stockId)
        .then(
            stock => (dispatch(receiveStock(stock))),
            error => (dispatch(receiveErrors(error.responseJSON)))
        )
);

export const iexFetchQuote = (symbol, apiKey) => dispatch => (
    iexCloudStockAPI.iexFetchStockQuote(symbol, apiKey)
        .then(
            (quote) => dispatch(receiveQuote(quote)),
            (error) => dispatch(receiveErrors(error.responseJSON))
        )
);