import React from 'react';
import StockGraphContainer from './stock_graph/stock_graph_container';
import MainNavContainer from '../dashboard/main_navbar/main_navbar_container';
import NewsContainer from '../dashboard/news/news_container';
import TransactionFormContainer from './transaction_form/transaction_container';

class StockDetail extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { symbol: '' };
    }

    componentDidMount() {
        this.setState({ symbol: this.props.match.params.symbol }, () => {
            this.props.fetchCompany(this.state.symbol, window.iexcloudAPIKey)
        });
    }

    render() {
        return (
            <div>
                <MainNavContainer />

                <div className="dashboard-container">
                    <div className="dashboard-content-container">
                        <div className="portfolio-and-relevant-info-container">
                            <div className="spacing">
                                <h1 className="stock-name">{this.state.symbol}</h1>
                                <StockGraphContainer />
                            </div>
                            <div className="company-info-container">
                                <h1 className="company-about">About</h1>
                                <div className="company-description">{this.props.companyInfo.description}</div>
                                <div>
                                    <div className="company-info-card">
                                        <div className="company-title">CEO</div>
                                        <div className="company-info">{this.props.companyInfo.CEO}</div>
                                    </div>
                                    <div className="company-info-card">
                                        <div className="company-title">Employees</div>
                                        <div className="company-info">{this.props.companyInfo.employees}</div>
                                    </div>
                                    <div className="company-info-card">
                                        <div className="company-title">Headquarters</div>
                                        <div className="company-info">{this.props.companyInfo.city}, {this.props.companyInfo.state}</div>
                                    </div>
                                    <div className="company-info-card">
                                        <div className="company-title">Founded</div>
                                        <div className="company-info">1976</div>
                                    </div>
                                    <div className="company-info-card">
                                        <div className="company-title">Founded</div>
                                        <div className="company-info">1976</div>
                                    </div>
                                </div>
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

// hide search results when user clicks off the search bar or search results
// const searchBar = document.getElementById("search-results");

// document.addEventListener("click", (e) => {
//     if (e.target !== searchBar) {
//         searchBar.classList.add('hide')
//     } else {
//         searchBar.classList.remove('hide')
//     }
// })

export default StockDetail;