import React, { PureComponent } from 'react';
import { LineChart, Line, Tooltip } from 'recharts';

export default class StockGraph extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state={ range: '5m' }
    }
    
    componentDidMount() {
        this.props.iexFetchData('AAPL', this.state.range, window.iexcloudAPIKey)
    }

    render() {
        const { data } = this.props;
        return (
            <LineChart width={690} height={260} data={data}>
                <Line type="monotone" dataKey="close" stroke="#000000" strokeWidth={2} dot={false}/>
                <Tooltip />
            </LineChart>
        );
    }
}