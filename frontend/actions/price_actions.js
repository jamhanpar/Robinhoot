import * as iexCloudStockApiUtil from '../util/iex_cloud_stock_api_util';

export const RECEIVE_SYMBOL_PRICES = "RECEIVE_PRICES";
export const RECEIVE_BATCH_PRICES = "RECEIVE_BATCH_PRICES";

const receiveSymbolPrices = prices => ({
    type: RECEIVE_SYMBOL_PRICES,
    prices
});

const receiveBatchPrices = prices => ({
    type: RECEIVE_BATCH_PRICES,
    prices
});

export const fetchPrices = (symbol, range, interval, apiKey) => dispatch => (
    iexCloudStockApiUtil.iexFetchSymbolPrices(symbol, range, interval, apiKey)
        .then(
            prices => (dispatch(receiveSymbolPrices(prices)))
        )
)

export const fetchBatchPrices = (symbols, range, interval, apiKey) => dispatch => (
    iexCloudStockApiUtil.iexFetchBatchPrices(symbols, range, interval, apiKey)
        .then(
            prices => (dispatch(receiveBatchPrices(prices)))
        )
)