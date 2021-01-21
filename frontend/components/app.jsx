import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <Route path='/home' component={SplashContainer} />
            <Route path='/signup' component={SignupContainer} />
            <Route path='/login' component={LoginContainer} />
        </Switch>
    </div>
);

export default App;