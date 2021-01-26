import { RECEIVE_NEWS } from '../actions/news_actions';

const newsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NEWS:
            const newState = Object.assign({}, state, action.news.news)
            return newState;
        default:
            return state;
    }
}

export default newsReducer;