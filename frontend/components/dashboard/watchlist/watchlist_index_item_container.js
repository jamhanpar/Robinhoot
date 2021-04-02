import { connect } from 'react-redux';
import WatchlistIndexItem from './watchlist_index_item';

const mStP = state => ({
    data: state.entities.prices,
});

const mDtP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(WatchlistIndexItem)