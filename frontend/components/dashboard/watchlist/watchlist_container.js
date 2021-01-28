import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { fetchPrices } from '../../../actions/price_actions';

const mStP = (state, ownProps) => {
    debugger
    return {
    data: state.entities.prices
}};

const mDtP = dispatch => {
    debugger
    return {
    iexFetchData: (symbol, range, interval, apiKey) => dispatch(fetchPrices(symbol, range, interval, apiKey))
}};

export default connect(mStP, mDtP)(WatchlistIndex)