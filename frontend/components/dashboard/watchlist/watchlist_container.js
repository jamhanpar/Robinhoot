import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { iexFetchQuotes } from "../../../actions/stock_actions";
import { fetchWatchlists } from "../../../actions/watchlist_actions";

const mStP = (state, ownProps) => ({
    watchlists: state.entities.watchlists,
    currentUserID: state.session.currentUser.id,
    quotes: state.entities.quotes    
});

const mDtP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists()),
    iexFetchQuotes: (symbols, apiKey) => dispatch(iexFetchQuotes(symbols, apiKey)),
});

export default connect(mStP, mDtP)(WatchlistIndex)