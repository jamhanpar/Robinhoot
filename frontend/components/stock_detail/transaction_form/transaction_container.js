import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { fetchWatchlists } from '../../../actions/watchlist_actions';

const mStP = (state, ownProps) => ({
    watched_stocks: state.entities.watchlist.watched_stocks
});

const mDtP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(TransactionForm)