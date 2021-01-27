import { combineReducers } from 'redux';
import users from './users_reducer';
import stocks from './stocks_reducer';
import news from './entities/news_reducer';
import prices from './entities/price_reducer';

export default combineReducers({
    users,
    stocks,
    news,
    prices,
});