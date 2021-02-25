import { connect } from 'react-redux';
import { fetchCompany } from "../../actions/company_actions";
import StockDetail from './stock_detail';

const mStP = ({ entities }) => ({
  companyInfo: entities.company,
});

const mDtP = (dispatch) => ({
  fetchCompany: (stockSymbol, apiKey) => dispatch(fetchCompany(stockSymbol, apiKey)),
});

export default connect(mStP, mDtP)(StockDetail)