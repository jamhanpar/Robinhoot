import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

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