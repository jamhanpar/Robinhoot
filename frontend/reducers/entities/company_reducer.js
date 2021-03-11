import { RECEIVE_COMPANY } from '../../actions/company_actions';

const companyReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMPANY:
            return action.companyResults;
        default:
            return state;
    }
}

export default companyReducer;