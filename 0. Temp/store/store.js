import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../../0. Temp/reducers/root_reducer';
import thunk from '../../frontend/store/node_modules/redux-thunk';

let preloadedState = {};
if (window.currentUser) {
    preloadedState = {
        session: {
            currentUser: window.currentUser
        }
    }
}

const configureStore = ( preloadedState ) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;