import { connect } from 'react-redux';
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
    fetchStocks: () => dispatch(fetchStocks()),
    fetchStock: () => dispatch(fetchStock())
});

export default connect(mStP, mDtP)(Dashboard);