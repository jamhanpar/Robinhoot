import React, { PureComponent } from 'react';

// code below is for testing purposes
import { LineChart, Line } from 'recharts';

const data = [
  { name: 'Page B', date: '9:00 AM', price: 10000, amt: 10000 },
  { name: 'Page B', date: '10:00 AM', price: 12000, amt: 10000 },
  { name: 'Page C', date: '11:00 AM', price: 11000, amt: 10000 },
  { name: 'Page D', date: '12:00 PM', price: 14000, amt: 10000 },
  { name: 'Page E', date: '1:00 PM', price: 25000, amt: 10000 },
  { name: 'Page F', date: '2:00 PM', price: 12500, amt: 10000 },
  { name: 'Page G', date: '3:00 PM', price: 40000, amt: 10000 },
  { name: 'Page G', date: '4:00 PM', price: 40000, amt: 10000 },
];

export default class StockChart extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

  render() {
    return (
      <LineChart width={100} height={40} data={data}>
        <Line type="monotone" dataKey="price" stroke="#00C805" strokeWidth={2} />
      </LineChart>
    );
  }
}