import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { fetchPrices } from '../../../actions/price_actions';
import { fetchWatchlists } from "../../../actions/watchlist_actions";

const mStP = (state, ownProps) => {
  debugger
    return {
      data: state.entities.prices,
      watchlists: state.entities.watchlist
    };};

const mDtP = dispatch => {
    return {
    iexFetchData: (symbol, range, interval, apiKey) => dispatch(fetchPrices(symbol, range, interval, apiKey)),
    fetchWatchlists: () => dispatch(fetchWatchlists())
}};

export default connect(mStP, mDtP)(WatchlistIndex)