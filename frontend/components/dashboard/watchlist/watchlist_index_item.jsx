import React from 'react';
import { Link } from 'react-router-dom';
import MiniStockChart from './mini_stock_chart';

export default class WatchlistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content", range: '1D', interval: "5"}

        this.getProperty = this.getProperty.bind(this);
    }

    componentDidMount() {
        // this.props.iexFetchQuote(this.props.symbol, window.iexcloudAPIKey)
    }

    getProperty(key) {
        const { quotes } = this.props;
        const stocksArray = Object.values(quotes).map(quote => Object.values(quote))
        debugger

        for (let i = 0; i < stocksArray.length; i++) {
            if (stocksArray[i][0].symbol === this.props.symbol) {
                if (key !== "changePercent") {
                    return `$${stocksArray[i][0][key].toFixed(2)}`
                } else {
                    return `${(stocksArray[i][0][key] * 100).toFixed(2)}%`;
                }
            }
        }
    }

    render() {
        const { symbol, data } = this.props

        return (
            <Link to={`/stocks/${symbol}`}>
                <div className="stock-info-card">
                    <div className="ticker-and-shares-owned">
                        <p className="stock-info-item stock-info-symbol">{symbol}</p>
                        {/* only show if stock is owned */}
                        <p className="stock-info-item">2 Shares</p>
                    </div>
                    <div className="stock-graph">
                        {/* want to get stock symbol from stock-info-symbol */}
                        <MiniStockChart
                            symbol={symbol}
                            data={data}    
                        />
                    </div>
                    <div className="stock-price-and-percent">
                        <p className="stock-info-item">{this.getProperty("iexClose")}</p>
                        <p className="stock-info-item stock-info-pct">{this.getProperty("changePercent")}</p>
                    </div>
                </div>
            </Link>
        )
    }
}