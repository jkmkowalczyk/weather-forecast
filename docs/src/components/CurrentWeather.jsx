import React, {Component} from 'react';

class CurrentWeather extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="current">
        <div className="current-info">
          <h2>{this.props.currentCity}</h2>
          <p>{this.props.currentTemperature}&deg; C</p>
          <p>{this.props.currentWeather}</p>
        </div>
        <div className="current-details"></div>
      </div>
    );
  }

}

export default CurrentWeather;
