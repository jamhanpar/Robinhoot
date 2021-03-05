import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistIndexItemContainer from './watchlist_index_item_container';
import { FaBolt } from "react-icons/fa";

export default class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchWatchlists();
    }

    renderWatchlists() {
        const {watchlists, currentUserID} = this.props;
        let currentUserWatchlist = Object.values(watchlists).filter(watchlist => {return watchlist.user_id === parseInt(currentUserID)})

        return (
            currentUserWatchlist.map((watchlist, i) => (
                <div className="list-container">
                    <div className="list-title-container">
                        <FaBolt className="lightning-icon"/>
                        <div className="list-title" key={i}>{watchlist.watchlist_name}</div>
                    </div>
                    {
                        watchlist.watched_stocks.map((stock, i) => (
                            <Link to={`/stocks/${stock.stock_symbol}`}>
                                <WatchlistIndexItemContainer
                                    key={`${stock.stock_symbol}-${i}`}
                                    symbol={stock.stock_symbol}
                                />
                            </Link>
                        ))
                    }
                </div>
            ))
        )
    }

    render() {
        if (!this.props.watchlists) return null;

        return (
            <div className="watchlist-container">
                <div className="watchlist-title-container">
                    <h1 className="watchlist-title">Stocks</h1>
                </div>
                {/* <Link to={`/stocks/symbol`}><WatchlistIndexItem data={this.props.data}/></Link>
                <Link to={`/stocks/symbol`}><WatchlistIndexItem data={this.props.data}/></Link> */}
                <div className="watchlist-title-container">
                    <h1 className="watchlist-title">Lists</h1>
                </div>
                {this.renderWatchlists()}
            </div>
        )
    }
}