import { RECEIVE_WATCHLISTS } from '../../actions/watchlist_actions';

const watchlistReducer = (state = {}, action) => {
    debugger
    switch (action.type) {
        case RECEIVE_WATCHLISTS:
            debugger
            return action.watchlists;
        default:
            return state;
    }
}

export default watchlistReducer;