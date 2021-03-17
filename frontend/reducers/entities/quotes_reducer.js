import { RECEIVE_QUOTE } from '../../actions/stock_actions';

const quotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_QUOTES:
            return action.quotes; 
        case RECEIVE_QUOTE:
            newState[action.quote.symbol] = action.quote;
            return newState;    
        default:
            return state;
    }
}

export default quotesReducer;