import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content", range: '1D', interval: "5"}
    }

    iexFetchData() {
        this.props.iexFetchData('AAPL', this.state.range, this.state.interval, window.iexcloudAPIKey)
    }

    render() {
        return (
            <div className="watchlist-container">
                <div className="watchlist-title-container">
                    <h1 className="watchlist-title">Stocks</h1>
                </div>
                {
                    <Link to="/stock/detail"><WatchlistIndexItem data={this.props.data}/></Link>
                }
            </div>
        )
    }
}