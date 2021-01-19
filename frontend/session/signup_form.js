import React from 'react';

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

        // instead of chirps replace with something else
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/chirps'));
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <header>
                        <p className="welcome">Welcome to MerakiTrades</p>
                    </header>
                    <div className="username-label">
                        <label for="username">Email or Username</label>
                    </div>
                    <div className="username-input-container">
                        <input className="username" type="text" value={this.state.username} onChange={this.update('username')}/>
                    </div>
                    <div class="username-label">
                    <label for="password">Password</label>
                    </div>

                    <div class="password-input-container">
                        <input class="password" type="password" value={this.state.password} onChange={this.update('password')}/>
                    </div>

                    <div class="forgot-password-container">
                        <a class="forgot-password-link" href="#">Forgot your username or password?</a>
                    </div>

                    <button class="login-submit-btn" type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;