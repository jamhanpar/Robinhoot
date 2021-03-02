import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user;
        default:
            return state;
    }
}

export default usersReducer;