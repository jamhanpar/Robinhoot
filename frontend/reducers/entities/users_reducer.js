import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER_STOCKS } from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id]= action.user;
            return newState;
        case RECEIVE_USER_STOCKS:
            debugger
            return Object.assign({}, state, action.user)
        default:
            return state;
    }
}

export default usersReducer;