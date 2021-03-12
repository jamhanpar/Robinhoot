import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING
import { signup, login, logout } from './util/session_api_util';
import { fetchStocks, fetchStock } from './util/stocks_api_util';
import { iexFetchGeneralNews } from './util/iex_cloud_api_util';
import { iexFetchBatchPrices } from './util/iex_cloud_stock_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    
    let preloadedState = undefined;
    
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    
    const store = configureStore(preloadedState);

    // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.stocks = fetchStocks;
    window.stock = fetchStock;
    window.iexStock = iexFetchStock;
    window.iexCompany = iexFetchCompany;
    window.iexNews = iexFetchNews;
    window.iexQuote = iexFetchBatchPrices;
    window.iexGeneralNews = iexFetchGeneralNews;
    // DELETE
    
    // ReactDOM.render(<div>React is working</div>, root)
    ReactDOM.render(<Root store={store}/>, root)
})