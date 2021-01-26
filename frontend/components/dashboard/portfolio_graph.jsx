import React, { PureComponent } from 'react';

// code below is for testing purposes
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot } from 'recharts';

const data = [
  { name: 'Page B', date: 'JAN 18, 2021', price: 10000, amt: 10000 },
  { name: 'Page B', date: 'JAN 19, 2021', price: 12000, amt: 10000 },
  { name: 'Page C', date: 'JAN 20, 2021', price: 11000, amt: 10000 },
  { name: 'Page D', date: 'JAN 21, 2021', price: 14000, amt: 10000 },
  { name: 'Page E', date: 'JAN 22, 2021', price: 25000, amt: 10000 },
  { name: 'Page F', date: 'JAN 23, 2021', price: 12500, amt: 10000 },
  { name: 'Page G', date: 'JAN 24, 2021', price: 40000, amt: 10000 },
];

// export default class SimpleLineChart extends PureComponent {
// //   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

//   render() {
//     return (
//       <LineChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     );
//   }
// }

const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
        <div className="custom-tooltip">
            <p className="date">{`${payload[0].date}`}</p>
        </div>
        );
    }

    return null;
};

export default class TinyLineChart extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

  render() {
    return (
      <LineChart width={690} height={260} data={data}>
        <Line type="monotone" dataKey="price" stroke="#00C805" strokeWidth={2} />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Tooltip />
      </LineChart>
    );
  }
}