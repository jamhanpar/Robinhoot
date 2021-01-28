import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchStocks, fetchStock } from '../../actions/stock_actions';
import { fetchPrices } from '../../actions/price_actions';
import Dashboard from './dashboard';

const mStP = ({ errors, entities, session }) => ({
    stock:{
        name: '',
        ticker: '',
    },
    user: session.currentUser,
    data: entities.prices,
    errors: errors.session
});

const mDtP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchStock: () => dispatch(fetchStock()),
    iexFetchData: (symbol, range, apiKey) => dispatch(fetchPrices(symbol, range, apiKey))
});

export default connect(mStP, mDtP)(Dashboard);