import { RECEIVE_STOCKS, RECEIVE_STOCK } from '../../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    debugger

    switch (action.type) {
        case RECEIVE_STOCKS:
            debugger
            return action.stocks;
        case RECEIVE_STOCK:
            debugger
            newState[action.stock.id] = action.stock;
            return newState;    
        default:
            return state;
    }
}

export default stocksReducer;