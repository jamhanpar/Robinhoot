import React, { PureComponent } from 'react';

import { LineChart, Line, Tooltip, YAxis, XAxis, ReferenceLine, ReferenceDot} from 'recharts';

class CustomizedLabel extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { label } = this.props;
		return <span x={0} y={0}>{label}</span>

  }
};

class PortfolioGraph extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state={ 
      range: '5dm', 
      interval: "1", 
      dateDesc: "Today", 
      toggleShow: [false, true, false, false, false, false, false]
    }

    this.updateRange = this.updateRange.bind(this);
    this.iexFetchGraphDate = this.iexFetchGraphDate.bind(this);
  }
  
  componentDidMount() {
    this.iexFetchGraphDate()
  }
  
  iexFetchGraphDate() {
    this.props.iexFetchData('VOO', this.state.range, this.state.interval, window.iexcloudAPIKey)
  }

  updateRange(timeframe) {
    let rangeUpdate = ''
    let intervalUpdate = ''
    let dateDescUpdate = ''
    let toggleShowUpdate = -1
  
    switch (timeframe) {
      case '1D':
        rangeUpdate='date';
        intervalUpdate='5';
        dateDescUpdate='Today';
        toggleShowUpdate = 1
        break;
      case '1W':
        rangeUpdate='5dm';
        intervalUpdate='1';
        dateDescUpdate='Past Week';
        toggleShowUpdate = 2
        break;
      case '1M':
        rangeUpdate='1mm';
        intervalUpdate='2';
        dateDescUpdate='Past Month';
        toggleShowUpdate = 3
        break;
      case '3M':
        rangeUpdate='3m';
        intervalUpdate='1';
        dateDescUpdate='Past 3 Months';
        toggleShowUpdate = 4
        break;
      case '1Y':
        rangeUpdate='1y';
        intervalUpdate='1';
        dateDescUpdate='Past Year';
        toggleShowUpdate = 5
        break;
      case '5Y':
        rangeUpdate='5y';
        intervalUpdate='1';
        dateDescUpdate='Past 5 Years';
        toggleShowUpdate = 6
        break;
      default:
        break;
    }

    this.setState({ 
      range: rangeUpdate, 
      interval: intervalUpdate, 
      dateDesc: dateDescUpdate,
    })
    this.updateClass(toggleShowUpdate)
    this.iexFetchGraphDate()
  }

  updateClass(toggleIdx) {
    for (let i = 0; i < this.state.toggleShow.length; i++) {
      this.state.toggleShow[i] = i !== toggleIdx ? false : true;
    };
  }

  render() {
    const { data } = this.props;

    return (
        <div className="portfolio-graph-container">
          <h1 className="account-balance">$10,000.00</h1>
          <ul className="portfolio-stats-list">
              <li className="portfolio-stats-item">$200</li>
              <li className="portfolio-stats-item">2.00%</li>
              <li className="portfolio-stats-item">{this.state.dateDesc}</li>
          </ul>
          <div className="portfolio-graph">
            <LineChart width={690} height={260} data={data}>
              <Line type="monotone" dataKey="close" stroke="#00C805" strokeWidth={2} dot={false}/>
              <YAxis domain={['auto']} hide={true}/>
              <XAxis dataKey="label" hide={true}></XAxis>
              <Tooltip content={<CustomizedLabel label={data.label}/>} />
            </LineChart>
          </div>
          <ul className="chart-display-list">
              {/* remove LIVE and ALL feed */}
              {/* <button className={this.state.toggleShow[0] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('LIVE')}>LIVE</button> */}
              <button className={this.state.toggleShow[1] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('1D')}>1D</button>
              <button className={this.state.toggleShow[2] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('1W')}>1W</button>
              <button className={this.state.toggleShow[3] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('1M')}>1M</button>
              <button className={this.state.toggleShow[4] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('3M')}>3M</button>
              <button className={this.state.toggleShow[5] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('1Y')}>1Y</button>
              <button className={this.state.toggleShow[6] ? "chart-display-item-active" : "chart-display-item"} onClick={() => this.updateRange('ALL')}>ALL</button>
          </ul>
      </div>
    );
  }
}

export default PortfolioGraph;