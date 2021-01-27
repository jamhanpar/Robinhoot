import * as iexCloudStockApiUtil from '../util/iex_cloud_stock_api_util';

export const RECEIVE_PRICES = "RECEIVE_PRICES";

const receivePrices = prices => ({
    type: RECEIVE_PRICES,
    prices
});

export const fetchPrices = (symbol, range, apiKey) => dispatch => {
    return iexCloudStockApiUtil.iexFetchQuote(symbol, range, apiKey)
        .then(
            prices => (dispatch(receivePrices(prices)))
        )
}