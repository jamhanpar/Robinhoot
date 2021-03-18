import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { fetchWatchlists } from '../../../actions/watchlist_actions';
import { iexFetchQuote } from "../../../actions/stock_actions";

const mStP = (state, ownProps) => {

    return {
    // quotes: state.entities.quotes,    
    watchlists: state.entities.watchlists,
}};

const mDtP = dispatch => ({
    // iexFetchQuote: (symbol, apiKey) => dispatch(iexFetchQuote(symbol, apiKey)),
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mStP, mDtP)(TransactionForm)