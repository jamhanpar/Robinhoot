import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { fetchPrices } from '../../../actions/price_actions';
import { fetchUser } from '../../../actions/user_actions';

const mStP = (state, ownProps) => {
    debugger
    return {
    data: state.entities.prices,
    userId: state.session.currentUser.id
}};

const mDtP = dispatch => {
    debugger
    return {
    getOwnedStocks: userId => dispatch(fetchUser(userId)),
    iexFetchData: (symbol, range, interval, apiKey) => dispatch(fetchPrices(symbol, range, interval, apiKey))
}};

export default connect(mStP, mDtP)(WatchlistIndex)