import { connect } from 'react-redux';
import { fetchCompany } from "../../actions/company_actions";
import { iexFetchQuote } from "../../actions/stock_actions";
import StockDetail from './stock_detail';

const mStP = ({ entities }) => {
  return {
  companyInfo: entities.company,
  quotes: entities.quotes
}};

const mDtP = dispatch => {
  return {
  fetchCompany: (symbol, apiKey) => dispatch(fetchCompany(symbol, apiKey)),
  iexFetchQuote: (symbol, apiKey) => dispatch(iexFetchQuote(symbol, apiKey)),
}};

export default connect(mStP, mDtP)(StockDetail)