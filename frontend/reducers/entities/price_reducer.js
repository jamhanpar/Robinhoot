import { RECEIVE_SYMBOL_PRICES, RECEIVE_BATCH_PRICES } from '../../actions/price_actions';

const priceReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SYMBOL_PRICES:
            return action.prices;
        case RECEIVE_BATCH_PRICES:
            return action.prices;        
        default:
            return state;
    }
}

export default priceReducer;