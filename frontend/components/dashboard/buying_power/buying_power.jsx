import React from 'react';
import { Link } from 'react-router-dom';

export default class BuyingPower extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="buying-power">
                <h1>Buying Power</h1>
                <h1>$10,000.00</h1>
            </div>
        )
    }
}