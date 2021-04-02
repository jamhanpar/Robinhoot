import React, { PureComponent } from 'react';

import { LineChart, Line } from 'recharts';

// DATA TEMPLATE
// const data = [
//   { name: 'AAPL', date: 'JAN 3, 2021', time:'9:00 AM', price: 100.00, amt: 10000 },
//   { name: 'AAPL', date: 'JAN 4, 2021', time:'9:00 AM', price: 105.00, amt: 10000 },
//   { name: 'AAPL', date: 'JAN 5, 2021', time:'9:00 AM', price: 120.00, amt: 10000 },
// ];

export default class MiniStockChart extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { width: 100, height: 40 }
  }

  render() {
    return (
      <LineChart className="watchlist-mini-graph" width={this.state.width} height={this.state.height} data={this.props.data} cursor="pointer">
        <Line type="monotone" dataKey="close" stroke="#00C805" strokeWidth={2} dot={false} />
      </LineChart>
    );
  }
}