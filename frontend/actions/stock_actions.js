import * as StockApiUtil from '../util/stocks_api_util';
import * as iexCloudStockApiUtil from '../util/iex_cloud_stock_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';


const receiveStocks = stocks => {
    return {
    type: RECEIVE_STOCKS,
    stocks
}};

const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
});

export const fetchStocks = () => dispatch => (
    StockApiUtil.fetchStocks()
        .then(
            stocks => (dispatch(receiveStocks(stocks))),
            error => (dispatch(receiveErrors(error.responseJSON)))
        )
);

export const fetchStock = stockId => dispatch => (
    StockApiUtil.fetchStock(stockId)
        .then(
            stock => (dispatch(receiveStock(stock))),
            error => (dispatch(receiveErrors(error.responseJSON)))
        )
);