import { connect } from 'react-redux';
import { fetchNews } from '../../../actions/news_actions';
import News from './news';

const mStP = (state, ownProps) => {
    debugger
    return {
        news: state.news
    }
};

const mDtP = dispatch => {
    debugger
    return {
    iexFetchNews: (apiKey) => dispatch(fetchNews(apiKey))
}};

export default connect(mStP, mDtP)(News);