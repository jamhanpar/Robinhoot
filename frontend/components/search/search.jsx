import React from "react";
import { withRouter, Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "", searchResults: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, () => {
        if (this.state.searchTerm !== "")
          this.props.fetchSearch(this.state.searchTerm, window.iexcloudAPIKey);
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.history.push({ pathname: `/stocks/${this.state.searchTerm}` });
  }

  renderSearchResults() {
    // refactor
    if (
      this.props.searchResults === undefined ||
      this.props.searchResults.length === 0
    ) {
      return (
        <div className="no-stock-result-message">
          We were unable to find any results for your search.
        </div>
      );
    }

    return (
      <div className="search-results">
        <h1 className="search-title">Stocks</h1>
        <div className="search-results-list">
          {this.props.searchResults.map((stock, i) => (
            <Link
                className="search-results-item"
                key={i}
                to={{
                  pathname: `/stocks/${stock.symbol}`,
                  state: { ticker: stock.symbol, name: stock.securityName },
                }}
              >
                <div className="search-stock-symbol">{stock.symbol}</div>
                <div className="search-stock-name">{stock.securityName}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="search-form-container">
        <div className="search-icon-container">
          <img className="search-icon" src={window.searchIcon} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={this.update("searchTerm")}
          />
        </form>
        <div className="search-results-container">
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
