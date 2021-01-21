import React from 'react';
import { Link } from 'react-router-dom';

// Temporary headers and paragraphs taken from Robinhood, but will replace
class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="main-nav-container">
                    <div className="main-logo">
                        <a className="company-name" href="/">MerakiTrades</a>
                        <a href="/"><img className="logo" src="https://pbs.twimg.com/profile_images/1267616128022351873/dZJpsWTD.jpg"/></a>
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
                        <span className="login-btn"><Link to='/login'>Log In</Link></span>
                        <button className="sign-up-btn"><Link to='/signup'>Sign up</Link></button>
                    </div>
                </div>

                <div className="info-container">
                    <div className="content-container">
                        <div className="sub-content-container">
                            <div className="info-1">
                                <h1 className="info-title-1">Investing for Everyone</h1>
                                <p className="info-p-1">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                                <button className="sign-up-btn-2">
                                    <Link to='/signup'><span>Sign up</span></Link>
                                </button>
                                <div className="free-stock-disclosure">
                                    <h4>Free Stock Disclosure</h4>
                                </div>
                            </div>
                            <div className="image-container">
                                <img className="img-1" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info-container-2">
                    <h1 className="info-title-2">Break Free from Commission Fees</h1>
                    <p className="info-p-2">Make unlimited commission-free trades in stocks, ETFs, and options with MerakiTrades Financials, as well as buy and sell cryptocurrencies with MerakiTrades Crypto. See our fee schedule to learn more about cost.</p>
                    <div className="general-disclosure">
                        <h4>Commissions Disclosure</h4>
                    </div>
                </div>

                <div className="info-container-3">
                    <div className="content-container-3">
                        <div className="info-subcontainer-3">
                            <div className="info-card">
                                <h1 className="info-title-2 info-title-3">Introducing Fractional Shares</h1>
                                <p className="info-p-3">Invest in thousands of stocks with as little as $1.</p>
                            </div>
                            <div className="info-card-container">
                                <div className="info-card-2">
                                    <h2 className="info-card-title">Invest Any Amount</h2>
                                    <p className="info-card-p">Choose how much you want to invest, and we'll convert from dollars to parts of a whole share.</p>
                                </div>

                                <div className="info-card-2">
                                    <h2 className="info-card-title">Build a Balanced Portfolio</h2>
                                    <p className="info-card-p">Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                                </div>

                                <div className="info-card-2">
                                    <h2 className="info-card-title">Trade in Real Time</h2>
                                    <p className="info-card-p">Trades placed during market hours are executed at that time, so you'll always know the share price.</p>
                                </div>
                            </div>
                            <div className="fractional-shares-disclosure">
                                <h4 className="general-disclosure">Fractional Shares Disclosure</h4>
                            </div>
                        </div>
                        <div className="image-container-3">
                            <img className="image-3" src="https://images.unsplash.com/photo-1587822409067-d887373e7324?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </div>
                </div>

                {/* <div className="info-container-4">
                    <img href="https://images.unsplash.com/photo-1611061614338-6ca5bed41ea3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80"></img>
                    <h1>Learn As You Grow</h1>
                    <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don't have).</p>
                </div> */}

                <div className="info-container-6">
                    <div className="content-container-6">
                        <div className="info-list">
                            <ul>
                                <li className="info-list-item">Stocks {"&"} Funds</li>
                                <li className="info-list-item">Options</li>
                                <li className="info-list-item">Gold</li>
                                <li className="info-list-item">Cash Management</li>
                                <li className="info-list-item">Crypto</li>
                            </ul>
                        </div>

                        <div className="info-list">
                            <ul>
                                <li className="info-list-item">Learn</li>
                                <li className="info-list-item">Support</li>
                                <li className="info-list-item">Snacks</li>
                            </ul>
                        </div>

                        <div className="info-list">
                            <ul>
                                <li className="info-list-item">About us</li>
                                <li className="info-list-item">Careers</li>
                                <li className="info-list-item">Blog</li>
                            </ul>
                        </div>

                        <div className="info-list-2">
                            <h1 className="info-title-6">MerakiTrades Snacks</h1>
                            <p className="info-p-6">The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
                            <form className="email-subscribe-input">
                                <input className="email-input-2" defaultValue="name@email.com" />
                                <button className="subscribe-btn">Subscribe</button>
                            </form>

                            <ul className="info-list-container">
                                <li className="info-list-item-2">Check the background of the firm on FINRA's BrokerCheck</li>
                                <li className="info-list-item-2">Brokerage Customer Relationship Summary</li>
                                <li className="info-list-item-2">MerakiTrades Terms {"&"} Conditions</li>
                                <li className="info-list-item-2">Disclosure Library</li>
                                <li className="info-list-item-2">Privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-container">
                    <div className="content-container">
                        <div className="financial-disclosure">
                            <p>© 2021 MerakiTrades. All rights reserved.</p>
                            <br/>
                            <p>MerakiTrades means MerakiTrades Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes MerakiTrades Financial, MerakiTrades Securities, and MerakiTrades Crypto.</p>
                            <br/>
                            <p>All investments involve risks, including the possible loss of capital.</p>
                            <br/>
                            <p>Securities trading is offered to self-directed customers by MerakiTrades Financial. MerakiTrades Financial is a member of the <a className="finra-link" href="https://www.finra.org/#/">Financial Industry Regulatory Authority (FINRA)</a>.</p>
                            <br/>
                            <div className="view-important-disclosures">
                                <h1 className="general-disclosure">View Important Disclosures</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;