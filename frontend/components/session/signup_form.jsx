import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Object.assign({}, this.props.user);
        
        this.firstNameClass = "first-name-input";
        this.lastNameClass = "last-name-input";
        this.emailClass = "signup-email";
        this.passwordClass = "signup-password";

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

        this.toggleHidden = "hide-errors";
        // this.toggleHidden = Object.values(this.props.errors).length < 1 ? "hide-errors" : "show-errors";
    }

    componentWillUnmount() {
        this.props.resetErrors();
    }

    update(field) {
        
        return e => {
            this.setState({ [field]: e.target.value })
            
            switch(field) {
                case 'first_name':
                    this.firstNameClass = this.state.first_name === "" ? "first-name-input-error" : "first-name-input";
                    break;
                case 'last_name':
                    this.lastNameClass = this.state.last_name === "" ? "last-name-input-error" : "last-name-input";
                    break;
                case 'email':
                    this.emailClass = this.state.email === "" ? "signup-email-error" : "signup-email";
                    break;
                case 'password':
                    this.passwordClass = this.state.password === "" ? "signup-password-error" : "signup-password";
                    break;
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (Object.values(this.state).some((val) => val === "")) {
            this.props.processForm(this.state)
                .then(() => this.errors = this.renderErrors());
            this.errors = this.renderErrors();
        } else {
            this.props.processForm(this.state)
                .then(() => this.props.history.push('/dashboard'));
        }
    }

    renderErrors() {
        const { errors } = this.props;

        this.firstNameClass = this.state.first_name === "" ? "first-name-input-error" : "first-name-input";
        this.lastNameClass = this.state.last_name === "" ? "last-name-input-error" : "last-name-input";
        this.emailClass = this.state.email === "" ? "signup-email-error" : "signup-email";
        this.passwordClass = this.state.password === "" ? "signup-password-error" : "signup-password";

        if (Object.values(errors).length < 1) this.toggleHidden = "show-errors";
    }

    render() {
        const { errors } = this.props;

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
                                    <input className={this.firstNameClass} type="text" placeholder="First name" autoComplete="on" value={this.state.first_name} onChange={this.update('first_name')}/>
                                    <input className={this.lastNameClass} type="text" placeholder="Last name" autoComplete="on" value={this.state.last_name} onChange={this.update('last_name')}/>
                                </div>

                                <div className="email-input-container">
                                    <input className={this.emailClass} type="text" placeholder="Email" autoComplete="on" value={this.state.email} onChange={this.update('email')}/>
                                </div>

                                <div className="password-input-container">
                                    <input className={this.passwordClass} type="password" placeholder="Password (min. 6 characters)" autoComplete="on" value={this.state.password} onChange={this.update('password')}/>
                                </div>

                                <div className="submit-or-reroute">
                                    <button className="signup-submit-btn" type="submit">Continue</button>
                                    <div className="signup-reroutes">
                                        <p className="already-started">Already started?</p>
                                        <Link to="/login"><p className="signup-alternative">Log in to complete your application</p></Link>                                    
                                    </div>
                                </div>

                                <div className={`signup-error-container ${this.toggleHidden}`}>
                                    <ul className="signup-error-list">
                                        {errors.map((error, i) =>
                                            this.state[Object.keys(error)] === "" ? (
                                            <li key={`error-#${i}`} className="signup-error-item">
                                                {Object.values(error)}
                                            </li>
                                            ) : null
                                        )}
                                    </ul>
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