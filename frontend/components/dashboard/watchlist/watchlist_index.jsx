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

    // componentDidUpdate() {
    //     this.props.fetchWatchlists();
    // }

    iexFetchData() {
        this.props.iexFetchData('AAPL', this.state.range, this.state.interval, window.iexcloudAPIKey)
    }

    renderWatchlists() {

    }

    render() {
        const {watchlists, currentUserID} = this.props;
        if (watchlists === {}) return null;

        const currentUserWatchlist = Object.values(watchlists).filter(watchlist => {return watchlist.user_id === currentUserID})

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
                {
                    currentUserWatchlist.map((watchlist, i) => (
                        <div>
                            <div>{watchlist.watchlist_name}</div>
                            { 
                                watchlist.watched_stocks.map((stock, i) => (
                                    <Link to={`/stocks/${stock.stock_symbol}`}>
                                        <WatchlistIndexItem key={`${stock.stock_symbol}-${i}`}symbol={stock.stock_symbol} data={this.props.data}/>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}