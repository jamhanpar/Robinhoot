import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.logout()
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                <h1>User Dashboard</h1>
                <button onClick={this.handleSubmit}>Logout</button>
            </div>
        )
    }
}

export default Dashboard;