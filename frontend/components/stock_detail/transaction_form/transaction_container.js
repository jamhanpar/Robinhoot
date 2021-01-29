import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { fetchPrices } from '../../../actions/price_actions';

const mStP = (state, ownProps) => ({

});

const mDtP = dispatch => ({
    
});

export default connect(mStP, mDtP)(TransactionForm)