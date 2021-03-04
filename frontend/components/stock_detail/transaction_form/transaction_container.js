import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { fetchWatchlists } from '../../../actions/watchlist_actions';

const mStP = (state, ownProps) => {

    return {
    watchlists: state.entities.watchlists,
}};

const mDtP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(TransactionForm)