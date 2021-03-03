import { RECEIVE_WATCHLISTS } from '../../actions/watchlist_actions';

const watchlistReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WATCHLISTS:
            return action.watchlists; 
        default:
            return state;
    }
}

export default watchlistReducer;