import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.logout()
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                <div className="dashboard-nav-bar">
                    <div className="dashboard-logo-container">
                        <img className="dashboard-logo" src={window.Logo} />
                    </div>
                    <div className="search-form-container">
                        <form>
                            <input type="text" placeholder="search" className="search-bar"/>
                        </form>
                    </div>
                    <div className="dashboard-menu-container">
                        <ul className="dashboard-menu-list">
                            <button className="logout-btn dashboard-menu-list-item" onClick={this.handleSubmit}>Logout</button>
                            <li className="dashboard-menu-list-item">Free Stocks</li>
                            <li className="dashboard-menu-list-item">Portfolio</li>
                            <li className="dashboard-menu-list-item">Cash</li>
                            <li className="dashboard-menu-list-item">Messages</li>
                            <li className="dashboard-menu-list-item">Account</li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-container">
                    <div className="dashboard-content-container">
                        <div className="portfolio-and-relevant-info-container">
                            <div className="portfolio-graph">
                                <h1 className="account-balance">$10,000.00</h1>
                            </div>
                            <div className="buying-power">
                                <h1>Buying Power</h1>
                                <h1>$10,000.00</h1>
                            </div>
                            <div className="sector-list">
                                <h1 className="sector-title">Popular Lists</h1>
                            </div>
                            <div className="news-list">
                                <h1 className="news-title">News</h1>
                            </div>
                            <div className="privacy-policy-container">
                                <h1 className="privacy-policy-disclaimer">For more information, see our <span className="privacy-policy-link">Privacy Policy</span>.</h1>
                            </div>
                        </div>
            
                        <div className="watchlist-container">
                            <h1 className="watchlist-title">Watchlist</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;