import { connect } from 'react-redux';
import { fetchNews } from '../../../actions/news_actions';
import News from './news';

const mStP = (state, ownProps) => ({
    entities: state.entities.news
});

const mDtP = dispatch => ({
    iexFetchNews: (apiKey) => dispatch(fetchNews(apiKey))
});

export default connect(mStP, mDtP)(News);