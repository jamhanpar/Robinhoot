import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import StockDetailContainer from './stock_detail/stock_detail_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
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
            <AuthRoute exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/signup' component={SignupContainer} />
            <AuthRoute exact path='/login' component={LoginContainer} />
            <ProtectedRoute path='/dashboard' component={DashboardContainer} />
            <ProtectedRoute path='/stocks/:symbol' component={StockDetailContainer} />
        </Switch>
    </div>
);

export default App;