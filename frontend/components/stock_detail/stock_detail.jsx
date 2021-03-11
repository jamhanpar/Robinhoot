import React from 'react';
import StockGraphContainer from './stock_graph/stock_graph_container';
import MainNavContainer from '../dashboard/main_navbar/main_navbar_container';
import NewsContainer from '../dashboard/news/news_container';
import TransactionFormContainer from './transaction_form/transaction_container';

class StockDetail extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { symbol: '' };

        this.getProperty = this.getProperty.bind(this);
    }

    componentDidMount() {
        this.setState({ symbol: this.props.match.params.symbol }, () => {
            this.props.fetchCompany(this.state.symbol, window.iexcloudAPIKey);
            this.props.iexFetchQuote(this.state.symbol, window.iexcloudAPIKey);
        });
    }

    getProperty(key) {
        const { quotes } = this.props;
        const stocksArray = Object.values(quotes)

        for (let i = 0; i < stocksArray.length; i++) {
            if (stocksArray[i]["symbol"] === this.state.symbol) {
                const stockValue = stocksArray[i][key]

                switch (key) {
                  case "peRatio":
                    return `${stockValue.toFixed(2)}`
                    break;
                  case "avgTotalVolume":
                    return `${stockValue.toLocaleString()}`
                    break;
                  case "week52High":
                    return `$${stockValue}`
                    break;
                  case "week52Low":
                    return `$${stockValue}`
                    break;                    
                  default:
                    return stockValue === null ? "N/A" : `${stockValue}`
                    break;
                }
            }
        }
    }

    render() {
        if (Object.keys(this.props.quotes).length === 0) return null;

        return (
          <div>
            <MainNavContainer />

            <div className="dashboard-container">
              <div className="dashboard-content-container">
                <div className="portfolio-and-relevant-info-container">
                  <div className="spacing">
                    <h1 className="stock-name">{this.state.symbol}</h1>
                    <StockGraphContainer/>
                  </div>
                  <div className="company-info-container">
                    <h1 className="company-about">About</h1>
                    <div className="company-description">{this.props.companyInfo.description}</div>
                    <div className="company-info-cards-list">
                      <div className="company-info-card">
                        <div className="company-title">CEO</div>
                        <div className="company-info">{this.props.companyInfo.CEO}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Employees</div>
                        <div className="company-info">{this.props.companyInfo.employees.toLocaleString()}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Headquarters</div>
                        <div className="company-info">
                          {this.props.companyInfo.city + ", " + this.props.companyInfo.state}
                        </div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Founded</div>
                        <div className="company-info">1976</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Market Cap</div>
                        <div className="company-info">Market Cap</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Price-Earnings Ratio</div>
                        <div className="company-info">{this.getProperty("peRatio")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Dividend Yield</div>
                        <div className="company-info">Dividend Yield</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Average Volume</div>
                        <div className="company-info">{this.getProperty("avgTotalVolume")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">High Today</div>
                        <div className="company-info">{this.getProperty("high")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Low Today</div>
                        <div className="company-info">{this.getProperty("low")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Open Price</div>
                        <div className="company-info">{this.getProperty("open")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">Volume</div>
                        <div className="company-info">{this.getProperty("volume")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">52 Week High</div>
                        <div className="company-info">{this.getProperty("week52High")}</div>
                      </div>
                      <div className="company-info-card">
                        <div className="company-title">52 Week Low</div>
                        <div className="company-info">{this.getProperty("week52Low")}</div>
                      </div>
                    </div>
                  </div>
                  <NewsContainer />
                  <div className="disclaimer-container">
                    <h1 className="full-disclosure-disclaimer">
                      All investments involve risks, including the loss of
                      principal. Securities trading offered through Robinhoot
                      Financial LLC, a registered broker-dealer and Member SIPC.{" "}
                      <span className="full-disclosure-link">
                        Full Disclosure
                      </span>
                    </h1>
                  </div>
                </div>

                <TransactionFormContainer symbol={this.state.symbol} price={""}/>
              </div>
            </div>
          </div>
        );
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