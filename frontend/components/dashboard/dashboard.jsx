import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioGraphContainer from './portfolio_graph/portfolio_graph_container';
import StockChart from './watchlist/mini_stock_chart';
import NewsContainer from './news/news_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content"}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.logout()
            .then(() => this.props.history.push('/'));
    }

    showDropdown() {
        this.setState({showToggle: this.state.showToggle === "show" ? "dropdown-content" : "show"})
    }

    render() {
        const { user } = this.props;
        
        // const link = (url) => {
        //     return url === "" ? null : url;
        //     location.href = url;
        // }
        
        return (
            <div>
                <div className="dashboard-nav-bar">
                    <div className="dashboard-logo-container">
                        <img className="dashboard-logo" src={window.Logo} />
                    </div>
                    <div className="search-form-container">
                        <div className="search-icon-container">
                            <img className="search-icon" src={window.searchIcon} />
                        </div>
                        <form>
                            <input type="text" placeholder="Search" className="search-bar"/>
                        </form>
                    </div>
                    <div className="dashboard-menu-container">
                        <ul className="dashboard-menu-list">
                            <li className="dashboard-menu-list-item">Free Stocks</li>
                            <li className="dashboard-menu-list-item">Portfolio</li>
                            <li className="dashboard-menu-list-item">Cash</li>
                            <li className="dashboard-menu-list-item">Messages</li>
                            <div className="dropdown-menu">
                                <li className="dashboard-menu-list-item" onClick={this.showDropdown} onBlur={this.showDropdown}>Account</li>
                                <div id="myDropdown" className={this.state.showToggle}>
                                    <div className="account-flex">
                                        <div className="account-info-section">
                                            <p className="account-user-first-last-name">{user.first_name} {user.last_name}</p>
                                            <div className="port-value-buying-power-container">
                                                <div className="port-value-in-account-settings">
                                                    <p className="account-value">$10,000.00</p>
                                                    <p className="account-value-desc">Porfolio Value</p>
                                                </div>
                                                <div className="buying-power-in-account-settings">
                                                    <p className="account-value">$10,000.00</p>
                                                    <p className="account-value-desc">Buying Power</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-dropdown-list">
                                            <p className="account-dropdown-item">Free Stock</p>
                                            <p className="account-dropdown-item">Account</p>
                                            <p className="account-dropdown-item">Banking</p>
                                            <p className="account-dropdown-item">Recurring</p>
                                            <p className="account-dropdown-item">History</p>
                                            <p className="account-dropdown-item">Documents</p>
                                            <p className="account-dropdown-item">Settings</p>
                                        </div>
                                        <div className="account-dropdown-list">
                                            <p className="account-dropdown-item">Help Center</p>
                                            <p className="account-dropdown-item">Contact Us</p>
                                            <p className="account-dropdown-item">Disclosures</p>
                                        </div>
                                        <div className="account-dropdown-list">
                                            <button className="account-dropdown-item logout-btn" onClick={this.handleSubmit}>Log Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-container">
                    <div className="dashboard-content-container">
                        <div className="portfolio-and-relevant-info-container">
                            <PortfolioGraphContainer />
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
                                    {/* want to get stock symbol from stock-info-symbol */}
                                    <StockChart 
                                        symbol={'AAPL'}
                                        iexFetchData={this.props.iexFetchData}
                                        data={this.props.data}    
                                    />
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