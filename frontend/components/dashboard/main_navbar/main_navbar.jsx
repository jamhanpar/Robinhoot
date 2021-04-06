import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from "../../search/search_container";

class MainNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content"}
        
        this.showDropdown = this.showDropdown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.logout()
            // .then(() => this.props.history.push('/'));
    }

    showDropdown() {
        this.setState({showToggle: this.state.showToggle === "show" ? "dropdown-content" : "show"})
    }

    render() {
        const { user } = this.props;
        
        return (
            <div className="dashboard-nav-bar">
                <div className="dashboard-logo-container">
                    <Link to="/dashboard"><img className="dashboard-logo" src={window.logo} /></Link>
                </div>
                <SearchContainer />
                <div className="dashboard-menu-container">
                    <ul className="dashboard-menu-list">
                        {/* <li className="dashboard-menu-list-item">Free Stocks</li>
                        <li className="dashboard-menu-list-item">Portfolio</li>
                        <li className="dashboard-menu-list-item">Cash</li>
                        <li className="dashboard-menu-list-item">Messages</li> */}
                        <a href="https://www.jameshansungpark.com/" target="_blank"><li className="dashboard-menu-list-item">Portfolio</li></a>
                        <a href="https://www.linkedin.com/in/jameshansungpark/" target="_blank"><li className="dashboard-menu-list-item">LinkedIn</li></a>
                        <a href="https://github.com/jamhanpar/Robinhoot" target="_blank"><li className="dashboard-menu-list-item">Github</li></a>
                        <a href="https://angel.co/u/jameshansungpark" target="_blank"><li className="dashboard-menu-list-item">AngelList</li></a>
                        <div className="dropdown-menu">
                            <li className="dashboard-menu-list-item" onClick={this.showDropdown} onBlur={this.showDropdown}>Account</li>
                            <div id="myDropdown" className={this.state.showToggle}>
                                <div className="account-flex">
                                    <div className="account-info-section">
                                        <p className="account-user-first-last-name">{user.first_name} {user.last_name}</p>
                                        <div className="port-value-buying-power-container">
                                            <div className="port-value-in-account-settings">
                                                <p className="account-value">$10,000.00</p>
                                                <p className="account-value-desc">Porfolio Value</p>
                                            </div>
                                            <div className="buying-power-in-account-settings">
                                                <p className="account-value">$10,000.00</p>
                                                <p className="account-value-desc">Buying Power</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account-dropdown-list">
                                        <p className="account-dropdown-item">Free Stock</p>
                                        <p className="account-dropdown-item">Account</p>
                                        <p className="account-dropdown-item">Banking</p>
                                        <p className="account-dropdown-item">Recurring</p>
                                        <p className="account-dropdown-item">History</p>
                                        <p className="account-dropdown-item">Documents</p>
                                        <p className="account-dropdown-item">Settings</p>
                                    </div>
                                    <div className="account-dropdown-list">
                                        <p className="account-dropdown-item">Help Center</p>
                                        <p className="account-dropdown-item">Contact Us</p>
                                        <p className="account-dropdown-item">Disclosures</p>
                                    </div>
                                    <div className="account-dropdown-list">
                                        <button className="account-dropdown-item logout-btn" onClick={this.handleSubmit}>Log Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainNav;