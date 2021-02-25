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
        this.setState({ symbol: this.props.match.params.symbol })
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

debugger
const searchBar = document.getElementById("search-results");

document.addEventListener("click", (e) => {
    if (e.target !== searchBar) {
        searchBar.classList.add('hide')
    } else {
        searchBar.classList.remove('hide')
    }
})

export default StockDetail;