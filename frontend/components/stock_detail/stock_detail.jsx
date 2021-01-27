import React from 'react';
import StockGraphContainer from './stock_graph_container';

class StockDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="stock-graph-container">
                <h1>This is Stock Details Page</h1>
                <StockGraphContainer />
            </div>
        )
    }
}

export default StockDetail;