import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push({ pathname: `/stocks/${this.state.searchTerm}` });
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
          </div>
        );
    }
}

export default withRouter(Search);