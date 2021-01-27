import React, { PureComponent } from 'react';

import { LineChart, Line, Tooltip } from 'recharts';

const stockData = [
    { name: 'AAPL', date: 'JAN 1, 2021', price: 143.19 },
    { name: 'AAPL', date: 'JAN 2, 2021', price: 143.19 },
    { name: 'AAPL', date: 'JAN 3, 2021', price: 143.19 },
    { name: 'AAPL', date: 'JAN 3, 2021', price: 143.19 },
    { name: 'AAPL', date: 'JAN 3, 2021', price: 43.19 },
    { name: 'AAPL', date: 'JAN 3, 2021', price: 143.19 },
    { name: 'AAPL', date: 'JAN 3, 2021', price: 143.19 },
    { name: 'AAPL', date: 'JAN 3, 2021', price: 150 },
];


export default class StockGraph extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state={ range: '5m' }
    }
    
    componentDidMount() {
        debugger
        this.props.iexFetchData('AAPL', this.state.range, window.iexcloudAPIKey)
    }

    render() {
        debugger
        const { data } = this.props;
        return (
            <LineChart width={690} height={260} data={data}>
                <Line type="monotone" dataKey="close" stroke="#000000" strokeWidth={2} dot={false}/>
            </LineChart>
        );
    }
}