import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { fetchBatchPrices } from '../../../actions/price_actions';
import { fetchUser } from '../../../actions/user_actions';
import { fetchStocks } from '../../../actions/stock_actions';

const mStP = (state, ownProps) => {
    return {
    stocks: state.entities.stocks,
    stocksOwned: state.entities.users.stock_ids,
    data: state.entities.prices,
    userId: state.session.currentUser.id
}};

const mDtP = dispatch => {
    return {
    fetchStocks: () => dispatch(fetchStocks()),
    getOwnedStocks: userId => dispatch(fetchUser(userId)),
    iexFetchData: (symbols, range, interval, apiKey) => dispatch(fetchBatchPrices(symbols, range, interval, apiKey))
}};

export default connect(mStP, mDtP)(WatchlistIndex);