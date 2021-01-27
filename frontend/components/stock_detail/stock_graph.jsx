import React, { PureComponent } from 'react';

import { LineChart, Line, Tooltip } from 'recharts';

const data = [
    { name: 'AAPL', date: 'JAN 1, 2021', price: '$143.19' },
];

class StockGraph extends PureComponent {
    constructor(props) {
        super(props)

        this.state={ range: '5m' }
    }

    componentDidMount() {
        this.props.iexFetchData('AAPL', this.state.range, window.iexcloudAPIKey)
    }

    render() {
        return (
            <LineChart width={690} height={260} data={data}>
                <Line dataKey="price" stroke="#00C805" strokeWidth={2} />
            </LineChart>
        )
    }
}

export default StockGraph;