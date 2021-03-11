import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_index';
import { fetchWatchlists } from "../../../actions/watchlist_actions";

const mStP = (state, ownProps) => ({
    watchlists: state.entities.watchlists,
    currentUserID: state.session.currentUser.id    
});

const mDtP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(WatchlistIndex)