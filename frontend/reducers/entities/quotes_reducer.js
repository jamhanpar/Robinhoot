import { RECEIVE_QUOTES, RECEIVE_QUOTE } from '../../actions/stock_actions';

const quotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    debugger

    switch (action.type) {
        case RECEIVE_QUOTES:
            return action.quotes; 
        case RECEIVE_QUOTE:
            debugger
            newState[action.quote.symbol] = {quote: action.quote};
            return newState;    
        default:
            return state;
    }
}

export default quotesReducer;