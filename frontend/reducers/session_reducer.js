import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    currentUser: null,
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, { currentUser: action.user })
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return newState;    
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};