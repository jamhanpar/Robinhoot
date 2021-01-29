import React from 'react';
import { Link } from 'react-router-dom';
import WatchlistIndexItem from './watchlist_index_item';

export default class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: 'dropdown-content', range: '1D', interval: '5', symbols: ''}

        this.filterOwnedStocks = this.filterOwnedStocks.bind(this);
        this.iexFetchData = this.iexFetchData.bind(this);
    }

    componentDidMount() {
        this.props.getOwnedStocks(this.props.userId);
        if (this.props.stocksOwned !== undefined ) {
            this.filterOwnedStocks();
            this.iexFetchData();
        }
    }

    iexFetchData() {
        this.props.iexFetchData(this.state.symbols, this.state.range, this.state.interval, window.iexcloudAPIKey)
    }

    filterOwnedStocks() {
        let ownedStocks = [];

        for(let i = 0; i < this.props.stocksOwned.length; i++) {
            if (Object.keys(stocks).includes(this.props.stocksOwned[i])) {
                ownedStocks.push(stocks[i].ticker)
            }
        }

        debugger
        this.setState({ symbols: ownedStocks.join(",") });
        this.ownedStockList = ownedStocks;
    }

    render() {
        const { stocksOwned, stocks } = this.props;

        debugger
        if (stocks.length === 0) return null;

        const watchlistIndexItems = this.ownedStockList.map(symbol => <WatchlistIndexItem 
                symbol={symbol} 
                data={this.props.data}
            />
        )

        return (
            <div className="watchlist-container">
                <div className="watchlist-title-container">
                    <h1 className="watchlist-title">Stocks</h1>
                </div>
                {this.watchlistIndexItems}
            </div>
        )
    }
}