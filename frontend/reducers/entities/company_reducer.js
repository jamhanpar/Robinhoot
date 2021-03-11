import { RECEIVE_COMPANY } from '../../actions/company_actions';

const companyReducer = (state = [], action) => {
    Object.freeze(state);
    debugger

    switch (action.type) {
        case RECEIVE_COMPANY:
            debugger
            return action.companyResults;
        default:
            return state;
    }
}

export default companyReducer;