import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-subcontainer">
                    <div className="signup-content-container">
                        <div className="signup-logo-container">
                            <img src={window.robinhootLogo} />
                        </div>
                        <div className="signup-form-container">
                            <form className="login-form" onSubmit={this.handleSubmit}>
                                <header>
                                    <h1 className="signup-form-title">Make Your Money Move</h1>
                                    <p className="signup-form-p">Robinhoot lets you invest in companies you love, commission-free.</p>
                                </header>

                                <div className="name-input-container">
                                    <input className="first-name-input" type="text" placeholder="First name" value={this.state.firstName} onChange={this.update('firstName')}/>
                                    <input className="last-name-input" type="text" placeholder="Last name" value={this.state.lastName} onChange={this.update('lastName')}/>
                                </div>

                                <div className="email-input-container">
                                    <input className="signup-email" type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')}/>
                                </div>

                                <div className="password-input-container">
                                    <input className="signup-password" type="password" placeholder="Password (min. 10 characters)" value={this.state.password} onChange={this.update('password')}/>
                                </div>

                                <div className="submit-or-reroute">
                                    <button className="signup-submit-btn" type="submit">Continue</button>
                                    <div className="signup-reroutes">
                                        <p class="already-started">Already started?</p>
                                        <Link to="/login"><p class="signup-alternative">Log in to complete your application</p></Link>                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="signup-disclaimer">
                            <p className="disclaimer-p">All investments involve risk, including the possible loss of principal. Investors should consider their investment objectives and risks carefully before investing.</p>
                            <p className="disclaimer-p">Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or web. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see Robinhoot Financial’s fee schedule to learn more.</p>
                            <p className="disclaimer-p">Securities trading offered through Robinhoot Financial LLC. Brokerage clearing services offered through Robinhoot Securities, LLC. Both are subsidiaries of Robinhoot Markets, Inc.</p>
                            <a href="https://brokercheck.finra.org/" className="disclaimer-link">Check the background of Robinhoot Financial LLC and Robinhoot Securities, LLC on FINRA’s BrokerCheck.</a>
                            <ul className="signup-footer-menu">
                                <li className="signup-footer-menu-item">Robinhoot Terms {'&'} Conditions</li>
                                <li className="signup-footer-menu-item">Disclosure</li>
                                <li className="signup-footer-menu-item">Library</li>
                                <li className="signup-footer-menu-item">Contact Us</li>
                                <li className="signup-footer-menu-item">FAQ</li>
                            </ul>
                            <p className="disclaimer-p">© 2020 Robinhoot. All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <div className="signup-app-info">
                    <div className="signup-info-card-list">
                        <div className="signup-info-card">
                            <h1 className="signup-info-card-title">Commission-free trading</h1>
                            <p className="signup-info-card-p">Break free from commission-fees and make unlimited commission-free trades in stocks, funds, and options with Robinhoot Financial. Other fees may apply. View our <span>fee schedule</span> to learn more.</p>
                        </div>
                        <div className="signup-info-card">
                            <h1 className="signup-info-card-title">Account Protection</h1>
                            <p className="signup-info-card-p">Robinhoot Financial is a member of SIPC. Securities in your account protected up to $500,000. For details, please see <a href="https://www.sipc.org/">www.sipc.org.</a></p>
                        </div>
                        <div className="signup-info-card">
                            <h1 className="signup-info-card-title">Stay on top of your portfolio</h1>
                            <p className="signup-info-card-p">Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;