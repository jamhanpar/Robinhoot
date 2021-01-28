import * as UserApiUtil from '../util/users_api_utils';

export const RECEIVE_USER_STOCKS = 'RECEIVE_USER_STOCKS';

const receiveUserStocks = user => {
    debugger
    return {
    type: RECEIVE_USER_STOCKS,
    user
}};

export const fetchUser = (userId) => dispatch => (
    UserApiUtil.requestUser(userId)
        .then(
            user => (dispatch(receiveUserStocks(user))),
        )
);