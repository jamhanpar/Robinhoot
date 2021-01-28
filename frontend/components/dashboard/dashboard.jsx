import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioGraphContainer from './portfolio_graph/portfolio_graph_container';
import StockChart from './watchlist/mini_stock_chart';
import NewsContainer from './news/news_container';
import MainNavContainer from './main_navbar/main_navbar_container';

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
                <MainNavContainer />

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