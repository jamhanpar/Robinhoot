import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { username: '', password: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.login(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <header>
                        <p className="welcome">Welcome to MerakiTrades</p>
                    </header>

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

                    <div className="forgot-password-container">
                        <a className="forgot-password-link" href="#">Forgot your username or password?</a>
                    </div>

                    <button className="login-submit-btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;