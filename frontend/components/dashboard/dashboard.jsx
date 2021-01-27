import React from 'react';
import { Link } from 'react-router-dom';
import Example from './portfolio_graph';
import StockChart from './watchlist/mini_stock_chart';
import NewsContainer from './news/news_container';
import News from './news/news';

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
                        <div className="search-icon-container">
                            <img className="search-icon" src={window.Logo} />
                        </div>
                        <form>
                            <input type="text" placeholder="Search" className="search-bar"/>
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
                            <div className="portfolio-graph-container">
                                <h1 className="account-balance">$10,000.00</h1>
                                <ul className="portfolio-stats-list">
                                    <li className="portfolio-stats-item">$200</li>
                                    <li className="portfolio-stats-item">2.00%</li>
                                    <li className="portfolio-stats-item">Today</li>
                                </ul>
                                {/* add graph here */}
                                <div className="portfolio-graph">
                                    <Example />
                                </div>
                                <ul className="chart-display-list">
                                    <li className="chart-display-item">LIVE</li>
                                    <li className="chart-display-item">1D</li>
                                    <li className="chart-display-item">1W</li>
                                    <li className="chart-display-item">1M</li>
                                    <li className="chart-display-item">3M</li>
                                    <li className="chart-display-item">1Y</li>
                                    <li className="chart-display-item">ALL</li>
                                </ul>
                            </div>
                            <div className="buying-power">
                                <h1>Buying Power</h1>
                                <h1>$10,000.00</h1>
                            </div>
                            <div className="sector-list">
                                <h1 className="sector-title">Popular Lists</h1>
                            </div>
                            <NewsContainer />
                            <div className="privacy-policy-container">
                                <h1 className="privacy-policy-disclaimer">For more information, see our <span className="privacy-policy-link">Privacy Policy</span>.</h1>
                            </div>
                        </div>
            
                        <div className="watchlist-container">
                            <div className="watchlist-title-container">
                                <h1 className="watchlist-title">Stocks</h1>
                            </div>
                            <div className="stock-info-card">
                                <div className="ticker-and-shares-owned">
                                    <p className="stock-info-item stock-info-symbol">AAPL</p>
                                    <p className="stock-info-item">2 Shares</p>
                                </div>
                                <div className="stock-graph">
                                    <StockChart />
                                </div>
                                <div className="stock-price-and-percent">
                                    <p className="stock-info-item">$355.06</p>
                                    <p className="stock-info-item stock-info-pct">+0.33%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;