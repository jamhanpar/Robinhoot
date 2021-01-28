import { RECEIVE_PRICES } from '../../actions/price_actions';

const priceReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PRICES:
            debugger
            return action.prices;    
        default:
            return state;
    }
}

export default priceReducer;