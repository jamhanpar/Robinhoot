import { RECEIVE_QUOTE } from '../../actions/stock_actions';

const quotesReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);

    switch (action.type) {
        case RECEIVE_QUOTE:
            newState[action.stock.id] = action.quote;
            return newState;    
        default:
            return state;
    }
}

export default quotesReducer;