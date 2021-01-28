import React, { PureComponent } from 'react';

import { LineChart, Line, Tooltip} from 'recharts';

// work in progress
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

class PortfolioGraph extends PureComponent {
  constructor(props) {
    super(props)
    debugger
    this.state={ range: '5dm', interval: "1" }

    this.updateRange = this.updateRange.bind(this);
  }

  componentDidMount() {
    this.props.iexFetchData('AAPL', this.state.range, this.state.interval, window.iexcloudAPIKey)
  }

  updateRange(timeframe) {
    let rangeUpdate = ''
    let intervalUpdate = ''

    switch (timeframe) {
      case '1D':
        rangeUpdate='date';
        intervalUpdate='5';
        break;
      case '1W':
        rangeUpdate='5dm';
        intervalUpdate='1';
        break;
      case '1M':
        rangeUpdate='1mm';
        intervalUpdate='2';
        break;
      case '3M':
        rangeUpdate='3m';
        intervalUpdate='1';
        break;
      case '1Y':
        rangeUpdate='1y';
        intervalUpdate='1';
        break;
      case '5Y':
        rangeUpdate='5y';
        intervalUpdate='1';
        break;
      default:
        break;
    }

    this.setState({ range: rangeUpdate, interval: intervalUpdate })
    this.props.iexFetchData('AAPL', this.state.range, this.state.interval, window.iexcloudAPIKey)
  }

  render() {
    const { data } = this.props;

    return (
        <div className="portfolio-graph-container">
          <h1 className="account-balance">$10,000.00</h1>
          <ul className="portfolio-stats-list">
              <li className="portfolio-stats-item">$200</li>
              <li className="portfolio-stats-item">2.00%</li>
              <li className="portfolio-stats-item">Today</li>
          </ul>
          <div className="portfolio-graph">
            <LineChart width={690} height={260} data={data}>
              <Line type="monotone" dataKey="close" stroke="#00C805" strokeWidth={2} dot={false}/>
              {/* <Tooltip content={<CustomTooltip />} /> */}
              <YAxis domain={['dataMin', 'dataMax']} />
              <Tooltip />
            </LineChart>
          </div>
          <ul className="chart-display-list">
              {/* remove LIVE and ALL feed */}
              <button className="chart-display-item" onClick={() => this.updateRange('LIVE')}>LIVE</button>
              <button className="chart-display-item-active" onClick={() => this.updateRange('1D')}>1D</button>
              <button className="chart-display-item" onClick={() => this.updateRange('1W')}>1W</button>
              <button className="chart-display-item" onClick={() => this.updateRange('1M')}>1M</button>
              <button className="chart-display-item" onClick={() => this.updateRange('3M')}>3M</button>
              <button className="chart-display-item" onClick={() => this.updateRange('1Y')}>1Y</button>
              <button className="chart-display-item" onClick={() => this.updateRange('ALL')}>ALL</button>
          </ul>
      </div>
    );
  }
}

export default PortfolioGraph;