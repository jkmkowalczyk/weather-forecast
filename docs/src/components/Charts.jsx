import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';

export class Charts extends Component {
render () {
    return (
      <HighchartsChart>
        <Chart />

        <Title>{this.props.title}</Title>

        <Subtitle></Subtitle>

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <XAxis categories={['Today', 'Tomorrow', 'In 2 days', 'In 3 days', 'In 4 days']}>
          <XAxis.Title>Day</XAxis.Title>
        </XAxis>

        <YAxis>
          <YAxis.Title>{this.props.measure}</YAxis.Title>
          <LineSeries name={this.props.measure} data={this.props.dats} />
        </YAxis>
      </HighchartsChart>
    );
  }

};
export default withHighcharts(Charts, Highcharts);
