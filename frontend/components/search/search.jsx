import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.searchTerm = "";

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
          <div className="search-form-container">
            <div className="search-icon-container">
              <img className="search-icon" src={window.searchIcon} />
            </div>
            <form>
              <input type="text" placeholder="Search" className="search-bar" />
            </form>
          </div>
        );
    }
}