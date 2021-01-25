import * as StockAPIUtil from '../util/stocks_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';


const receiveStocks = stocks => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
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