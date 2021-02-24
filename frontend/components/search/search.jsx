import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      debugger
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
            
            this.props.fetchSearch(e.currentTarget.value)
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.props.history.push({ pathname: `/stocks/${this.state.searchTerm}` });
        this.props.fetchSearch(this.state.searchTerm, window.iexcloudAPIKey);
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
            <div>
              <p>{this.props.searchResults}</p>
            </div>
          </div>
        );
    }
}

export default withRouter(Search);