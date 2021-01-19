// automating the process of allowing the users to see certain pages based on log in and log out
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    // returns true or false based on whether we have a current user
    loggedIn: Boolean(state.session.currentUser)
});

// If the user is logged in, they won't be able to see this component, but if the user is logged out, they will be able to
// <AuthRoute path="" component={} />

// if we are logged in we want to redirect
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
            loggedIn ? <Component {...props}/> : <Redirect to="/signup" />
        )}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
