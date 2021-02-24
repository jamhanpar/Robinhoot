import React from "react";
import { withRouter, Link } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '', searchResults: [] }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
    }

    update(field) {
      return (e) => {
        this.setState({ [field]: e.currentTarget.value }, () => { 
          if (this.state.searchTerm !== '') this.props.fetchSearch(this.state.searchTerm, window.iexcloudAPIKey)
        })
      }
    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push({ pathname: `/stocks/${this.state.searchTerm}` });
        // this.props.fetchSearch(this.state.searchTerm, window.iexcloudAPIKey);
    }

    renderSearchResults() {
      // refactor
      if (this.props.searchResults === undefined || this.props.searchResults.length === 0) {
        return <div>We were unable to find any results for your search.</div>
      } else {
        return this.props.searchResults.map((stock, i) => (
          <Link 
            className='stock-search-results'
            key={i}  
            to={{
                pathname: `/stocks/${stock.symbol}`,
                state: {ticker: stock.symbol, name: stock.securityName}
            }}>
            <div>{stock.symbol}</div>
            <div>{stock.securityName}</div>
          </Link>
        ))
      }

    }

    render() {
      return (
        <div className="search-form-container">
          <div className="search-icon-container">
            <img className="search-icon" src={window.searchIcon} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <input className="search-bar" type="text" placeholder="Search" onChange={this.update("searchTerm")}/>
          </form>
          <div className="show-search">
            <h1 className="search-results">Stocks</h1>
            {this.renderSearchResults()}
          </div>
        </div>
      );
    }
}

export default withRouter(Search);