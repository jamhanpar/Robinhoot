import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { fetchPrices } from '../../../actions/price_actions';
import MainNav from './main_navbar';

const mStP = ({ errors, entities, session }) => ({
    user: session.currentUser,
    data: entities.prices,
    errors: errors.session
});

const mDtP = dispatch => ({
    logout: () => dispatch(logout()),
    iexFetchData: (symbol, range, apiKey) => dispatch(fetchPrices(symbol, range, apiKey))
});

export default connect(mStP, mDtP)(MainNav);