import React from 'react';
import StockGraphContainer from './stock_graph/stock_graph_container';
import MainNavContainer from '../dashboard/main_navbar/main_navbar_container';
import NewsContainer from '../dashboard/news/news_container';
import TransactionFormContainer from './transaction_form/transaction_container';

class StockDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MainNavContainer />

                <div className="dashboard-container">
                    <div className="dashboard-content-container">
                        <div className="portfolio-and-relevant-info-container">
                            <div className="spacing">
                                <h1 className="stock-name">Apple</h1>
                                <StockGraphContainer />
                            </div>
                            <NewsContainer />
                            <div className="privacy-policy-container">
                                <h1 className="privacy-policy-disclaimer">For more information, see our <span className="privacy-policy-link">Privacy Policy</span>.</h1>
                            </div>
                        </div>
            
                        <TransactionFormContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default StockDetail;