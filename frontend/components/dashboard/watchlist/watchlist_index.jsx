import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content"}
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        
    }

    render() {
        return (
            <div className="watchlist-container">
                <div className="watchlist-title-container">
                    <h1 className="watchlist-title">Stocks</h1>
                </div>
                {
                    <WatchlistIndexItem />
                }
            </div>
        )
    }
}