import React from 'react';
import { Link } from 'react-router-dom';
import MainNavContainer from './main_navbar/main_navbar_container';
import PortfolioGraphContainer from './portfolio_graph/portfolio_graph_container';
import BuyingPowerContainer from './buying_power/buying_power_container';
import NewsContainer from './news/news_container';
import WatchlistContainer from './watchlist/watchlist_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content"}
    }

    componentDidMount() {
        
    }

    render() {        
        return (
            <div>
                <MainNavContainer />

                <div className="dashboard-container">
                    <div className="dashboard-content-container">
                        <div className="portfolio-and-relevant-info-container">
                            <PortfolioGraphContainer />
                            <BuyingPowerContainer />
                            <div className="sector-list">
                                <h1 className="sector-title">Popular Lists</h1>
                            </div>
                            <NewsContainer />
                            <div className="privacy-policy-container">
                                <h1 className="privacy-policy-disclaimer">For more information, see our <span className="privacy-policy-link">Privacy Policy</span>.</h1>
                            </div>
                        </div>
            
                        <WatchlistContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;