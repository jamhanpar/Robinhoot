// automating the process of allowing the users to see certain pages based on whether they are signed in
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    // returns true or false based on whether we have a current user
    loggedIn: Boolean(state.session.currentUser)
});

// Auth: can't access if logged in already
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
            loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
        )}
    />
);

// Protected: can only access if logged in
const Protected = ({ loggedIn, path, component: Component }) => (
    <Route path={path} render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
