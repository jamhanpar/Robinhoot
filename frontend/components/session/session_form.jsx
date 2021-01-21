import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    renderErrors() {
        const { errors } = this.props

        return (
            <div className="session-error-container">
                {
                    errors.map((error, i) => (
                        <p key={`error-#${i}`}>{error}</p>
                    ))
                }
            </div>
        );
    }

    render() {
        const { formType } = this.props;

        const emailInput = (formType === "Sign Up") ? 
            <div className="email-input-container">
                <div className="email-label">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="email-input">
                    <input className="email" type="text" autoComplete="current-email" value={this.state.email} onChange={this.update('email')}/>
                </div>
            </div> :
            null;
        
        
        return (
            <div className="session-form-container">
                <form className="session-form-box" onSubmit={this.handleSubmit}>
                    <header>
                        <p className="welcome">Welcome to MerakiTrades</p>
                    </header>

                    {emailInput}

                    <div className="username-label">
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="username-input-container">
                        <input className="username" type="text" autoComplete="current-username" value={this.state.username} onChange={this.update('username')}/>
                    </div>

                    <div className="username-label">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="password-input-container">
                        <input className="password" type="password" autoComplete="current-password" value={this.state.password} onChange={this.update('password')}/>
                    </div>

                    {this.renderErrors()}

                    <button className="session-submit-btn" type="submit">{formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;