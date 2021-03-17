import React from 'react';
import { FaBolt } from "react-icons/fa";
import WatchlistIndexItemContainer from './watchlist_index_item_container';

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

        debugger
        return (
            currentUserWatchlist.map((watchlist, i) => (
                <div className="list-container" key={i}>
                    <div className="list-title-container">
                        <FaBolt className="lightning-icon"/>
                        <div className="list-title">{watchlist.watchlist_name}</div>
                    </div>
                    {
                        watchlist.watched_stocks.map((stock, i) => (<WatchlistIndexItemContainer key={i} symbol={stock.stock_symbol} />))
                    }
                </div>
            ))
        )
    }

    render() {
        if (!this.props.watchlists) return null;
        debugger
        
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