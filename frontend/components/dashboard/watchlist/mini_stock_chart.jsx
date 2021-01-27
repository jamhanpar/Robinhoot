import React, { PureComponent } from 'react';

// code below is for testing purposes
import { LineChart, Line } from 'recharts';


// DATA TEMPLATE
// const data = [
//   { name: 'AAPL', date: 'JAN 3, 2021', time:'9:00 AM', price: 10000, amt: 10000 },
// ];

export default class StockChart extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { width: 100, height: 40, range: '5m' }
  }

  componentDidMount() {
    debugger
    this.props.iexFetchData(this.props.symbol, this.state.range, window.iexcloudAPIKey)
  }

  render() {
    debugger
    return (
      <LineChart width={this.state.width} height={this.state.height} data={this.props.data}>
        <Line type="monotone" dataKey="close" stroke="#00C805" strokeWidth={2} dot={false} />
      </LineChart>
    );
  }
}