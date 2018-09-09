import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class NextWeekWeather extends Component {

  constructor(props) {
    super(props);
  }


  selectWeatherIcon = (weather) => {
    if (weather === "clear sky") {
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"/>
          </div>
        </div>
      )
    } else if (weather.includes("clouds") || weather === "mist" || weather === "haze") {
      return (
        <div className="icon cloudy">
          <div className="cloud"/>
          <div className="cloud"/>
        </div>
      )
    } else if (weather.includes("rain")) {
      return (
        <div className="icon rainy">
          <div className="cloud"/>
          <div className="rain"/>
        </div>
      )
    } else if (weather === "thunderstorm") {
      return (
        <div className="icon thunder-storm">
          <div className="cloud"/>
          <div className="lightning">
            <div className="bolt"/>
            <div className="bolt"/>
          </div>
        </div>
      )
    }
  };


  render() {
    return (
      <div className="nextweek">
        <div className="nextweek-info">
          <h2><Moment format="MMM Do">{this.props.nextweekDate}</Moment></h2>
          <p>{this.props.nextweekTemperatureDay}&deg;C</p>
          <p>{this.props.nextweekWeather}</p>
          <img src="../../images/arrow.ico"
               style={{transform: 'rotate(' + this.props.nextweekWindDirection + 'deg)', height: "50px"}}/>
          <p>{this.props.nextweekWindSpeed}m/s</p>
        </div>
        <div className="nextweek-details">
          {this.selectWeatherIcon(this.props.nextweekWeather)}
        </div>
      </div>
    );
  }

}

export default NextWeekWeather;
