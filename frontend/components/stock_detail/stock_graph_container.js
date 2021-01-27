import { connect } from 'react-redux';
import StockGraph from './stock_graph';
import { iexFetchQuote } from '../../util/iex_cloud_stock_api_util';

const mStP = (state, ownProps) => ({
    data = state.entities.data
});

const mDtP = dispatch => ({
    iexFetchData: (symbol, range, apiKey) => dispatch(iexFetchQuote(symbol, range, apiKey))
});

export default connect(mStP, mDtP)(StockGraph)