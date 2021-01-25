import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchStocks, fetchStock } from '../../actions/stock_actions';
import Dashboard from './dashboard';

const mStP = ({ errors }) => ({
    stock:{
        name: '',
        ticker: '',
    },
    errors: errors.session
});

const mDtP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchStock: () => dispatch(fetchStock())
});

export default connect(mStP, mDtP)(Dashboard);