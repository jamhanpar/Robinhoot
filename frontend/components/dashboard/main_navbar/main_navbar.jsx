import React from 'react';
import { Link } from 'react-router-dom';

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
            .then(() => this.props.history.push('/'));
    }

    showDropdown() {
        this.setState({showToggle: this.state.showToggle === "show" ? "dropdown-content" : "show"})
    }

    render() {
        const { user } = this.props;
        
        // const link = (url) => {
        //     return url === "" ? null : url;
        //     location.href = url;
        // }
        
        return (
            <div className="dashboard-nav-bar">
                <div className="dashboard-logo-container">
                    <Link to="/dashboard"><img className="dashboard-logo" src={window.logo} /></Link>
                </div>
                <div className="search-form-container">
                    <div className="search-icon-container">
                        <img className="search-icon" src={window.searchIcon} />
                    </div>
                    <form>
                        <input type="text" placeholder="Search" className="search-bar"/>
                    </form>
                </div>
                <div className="dashboard-menu-container">
                    <ul className="dashboard-menu-list">
                        <li className="dashboard-menu-list-item">Free Stocks</li>
                        <li className="dashboard-menu-list-item">Portfolio</li>
                        <li className="dashboard-menu-list-item">Cash</li>
                        <li className="dashboard-menu-list-item">Messages</li>
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