import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: '', username: '', password: '' }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.signup(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <header>
                        <p className="welcome">Welcome to Robinhoot</p>
                    </header>

                    <div className="email-label">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="email-input-container">
                        <input className="email" type="text" autoComplete="current-email" value={this.state.email} onChange={this.update('email')}/>
                    </div>

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

                    <button className="login-submit-btn" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;