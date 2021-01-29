import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { fetchPrices } from '../../../actions/price_actions';

const mStP = (state, ownProps) => {
    return {
    data: state.entities.prices
}};

const mDtP = dispatch => {
    return {
    iexFetchData: (symbol, range, interval, apiKey) => dispatch(fetchPrices(symbol, range, interval, apiKey))
}};

export default connect(mStP, mDtP)(WatchlistIndex)