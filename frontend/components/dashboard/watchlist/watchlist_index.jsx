import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content", range: '1D', interval: "5"}
    }

    componentDidMount() {
        this.props.fetchWatchlists();
    }

    // componentDidUpdate(prevProps, prevStates) {
    //     debugger
    //     if (this.props.watchlists !== prevProps.watchlists) {
    //         this.props.fetchWatchlists();
    //     }
    // }

    iexFetchData() {
        this.props.iexFetchData('AAPL', this.state.range, this.state.interval, window.iexcloudAPIKey)
    }

    // renderWatchlists() {
        
    // }

    render() {
        const {watchlists, currentUserID} = this.props;
        let currentUserWatchlist = Object.values(watchlists).filter(watchlist => {return watchlist.user_id === parseInt(currentUserID)})

        debugger
        if (!watchlists) return null;

        let renderWatchlists = currentUserWatchlist.map((watchlist, i) => (
            <div>
              <div>{watchlist.watchlist_name}</div>
              {watchlist.watched_stocks.map((stock, i) => (
                <Link to={`/stocks/${stock.stock_symbol}`}>
                  <WatchlistIndexItem
                    key={`${stock.stock_symbol}-${i}`}
                    symbol={stock.stock_symbol}
                    data={this.props.data}
                  />
                </Link>
              ))}
            </div>
          ));
        
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
                {renderWatchlists}
            </div>
        )
    }
}