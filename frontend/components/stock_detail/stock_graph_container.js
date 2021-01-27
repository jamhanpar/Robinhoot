import { connect } from 'react-redux';
import StockGraph from './stock_graph';
import { fetchPrices } from '../../actions/price_actions';

const mStP = (state, ownProps) => ({
    data: state.entities.prices
});

const mDtP = dispatch => ({
    iexFetchData: (symbol, range, apiKey) => dispatch(fetchPrices(symbol, range, apiKey))
});

export default connect(mStP, mDtP)(StockGraph)