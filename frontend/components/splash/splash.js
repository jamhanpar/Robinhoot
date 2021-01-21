import React from 'react';
import { Link } from 'react-router-dom';

// Temporary headers and paragraphs taken from Robinhood, but will replace
class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="main-bar-container">
                    <div className="main-logo">
                        <a className="company-name" href="#">MerakiTrades</a>
                        <a href="#"><img className="logo" src="https://pbs.twimg.com/profile_images/1267616128022351873/dZJpsWTD.jpg"/></a>
                    </div>
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-list-item"><a href="#">Products</a></li>
                            <li className="nav-list-item"><a href="#">Learn</a></li>
                            <li className="nav-list-item"><a href="#">Support</a></li>
                            <li className="nav-list-item"><a href="#">Who we are</a></li>
                        </ul>
                    </nav>
                    <div className="sign-up-options">
                        <span className="login-btn" href="#"><Link to='/login'>Log In</Link></span>
                        <button className="sign-up-btn"><Link to='/signup'>Sign up</Link></button>
                    </div>
                </div>
                <div className="info-container">
                    <h1>Investing for Everyone</h1>
                    <p>Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations.apply.</p>
                    <button>
                        <Link to='/signup'>Sign up</Link>
                    </button>
                    <div className="free-stock-disclosure">
                        <h4>Free Stock Disclosure</h4>
                    </div>
                </div>

                <div className="info-container-2">
                    <h1>Break Free from Commission Fees</h1>
                    <p>Make unlimited commission-free trades in stocks, ETFs, and options with MerakiTrades Financials, as well as buy and sell cryptocurrencies with MerakiTrades Crypto. See our fee schedule to learn more about cost.</p>
                    <div className="commissions-disclosure">
                        <h4>Commissions Disclosure</h4>
                    </div>
                </div>

                <div className="info-container-3">
                    <h1>Introducing Fractional Shares</h1>
                    <p>Invest in thousands of stocks with as little as $1.</p>
                    <div className="info-card-container">
                        <div className="info-card">
                            <h2>Invest Any Amount</h2>
                            <p>Choose how much you want to invest, and we'll convert from dollars to parts of a whole share.</p>
                        </div>

                        <div className="info-card">
                            <h2>Build a Balanced Portfolio</h2>
                            <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                        </div>

                        <div className="info-card">
                            <h2>Trade in Real Time</h2>
                            <p>Trades placed during market hours are executed at that time, so you'll always know the share price.</p>
                        </div>
                    </div>
                    <div className="fractional-shares-disclosure">
                        <h4>Fractional Shares Disclosure</h4>
                    </div>
                </div>

                <div className="info-container-4">
                    <img href="https://images.unsplash.com/photo-1611061614338-6ca5bed41ea3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80"></img>
                    <h1>Learn As You Grow</h1>
                    <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don't have).</p>
                </div>

                <div className="footer-container">
                    <div className="info-list-1">
                        <ul>
                            <li>Stocks "&amp;"{"&amp;"} Funds</li>
                            <li>Options</li>
                            <li>Gold</li>
                            <li>Cash Management</li>
                            <li>Crypto</li>
                        </ul>
                    </div>

                    <div className="info-list-2">
                        <ul>
                            <li>Learn</li>
                            <li>Support</li>
                            <li>Snacks</li>
                        </ul>
                    </div>

                    <div className="info-list-3">
                        <ul>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="info-list-4">
                        <h1>Robinhood Snacks</h1>
                        <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
                        <form>
                            <input value="name@email.com" />
                            <button>Subscribe</button>
                        </form>

                        <ul>
                            <li>Check the background of the firm on FINRA's BrokerCheck</li>
                            <li>Brokerage Customer Relationship Summary</li>
                            <li>MerakiTrades Terms "&amp;"{"&amp;"} Conditions</li>
                            <li>Disclosure Library</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    <div className="financial-disclosure">
                        <p>© 2021 MerakiTrades. All rights reserved.</p>
                        <br/>
                        <p>Robinhood means Robinhood Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhood Financial, Robinhood Securities, and Robinhood Crypto.</p>
                        <br/>
                        <p>All investments involve risks, including the possible loss of capital.</p>
                        <br/>
                        <p>Securities trading is offered to self-directed customers by Robinhood Financial. Robinhood Financial is a member of the Financial Industry Regulatory Authority (FINRA).</p>
                        <br/>
                        <div className="view-important-disclosures">
                            <h1>View Important Disclosures</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;