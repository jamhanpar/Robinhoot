import { RECEIVE_STOCKS, RECEIVE_STOCK } from '../../actions/stock_actions';
import usersReducer from './users_reducer';

const stocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STOCKS:
            return action.stocks;
        case RECEIVE_STOCK:
            newState[action.stock.id] = action.stock;
            return newState;    
        default:
            return state;
    }
}

export default stocksReducer;