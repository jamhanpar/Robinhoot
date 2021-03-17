import React from 'react';
import { FaBolt } from "react-icons/fa";
import WatchlistIndexItemContainer from './watchlist_index_item_container';

export default class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchWatchlists()
    }

    componentDidUpdate(prevProps, prevStates) {
        if (this.props.watchlists !== prevProps.watchlists) {
            const defaultWatchlist = Object.values(this.props.watchlists)[0].watched_stocks
            const watchedStocksArray = Object.values(defaultWatchlist).map(stock => stock.stock_symbol)
            const stockSymbols = watchedStocksArray.join(",")
            this.props.iexFetchQuotes(stockSymbols, window.iexcloudAPIKey)
        }
    }
    renderWatchlists() {
        const {watchlists, currentUserID} = this.props;
        let currentUserWatchlist = Object.values(watchlists).filter(watchlist => {return watchlist.user_id === parseInt(currentUserID)})

        return (
            currentUserWatchlist.map((watchlist, i) => (
                <div className="list-container" key={i}>
                    <div className="list-title-container">
                        <FaBolt className="lightning-icon"/>
                        <div className="list-title">{watchlist.watchlist_name}</div>
                    </div>
                    {
                        watchlist.watched_stocks.map((stock, i) => (<WatchlistIndexItemContainer key={i} symbol={stock.stock_symbol} quotes={this.props.quotes} />))
                    }
                </div>
            ))
        )
    }

    render() {
        if (Object.keys(this.props.watchlists).length === 0) return null;
        
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