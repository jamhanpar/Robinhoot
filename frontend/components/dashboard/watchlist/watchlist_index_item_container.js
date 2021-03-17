import { connect } from 'react-redux';
import { iexFetchQuote } from "../../../actions/stock_actions";
import WatchlistIndexItem from './watchlist_index_item';

const mStP = state => ({
    data: state.entities.prices,
    // quotes: state.entities.quotes
});

const mDtP = dispatch => ({
    // iexFetchQuote: (symbol, apiKey) => dispatch(iexFetchQuote(symbol, apiKey)),
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(WatchlistIndexItem)