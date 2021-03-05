import { connect } from 'react-redux';
import WatchlistIndexItem from './watchlist_index_item';
import { iexFetchQuote } from "../../../actions/stock_actions";

const mStP = state => ({
    data: state.entities.prices,
    quote: state.entities.quotes
});

const mDtP = dispatch => ({
    iexFetchQuote: (symbol, apiKey) => dispatch(iexFetchQuote(symbol, apiKey)),
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(WatchlistIndexItem)