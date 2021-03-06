import React, {Component} from 'react';

class CurrentWeather extends Component {

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
      <div className="current">
        <div className="current-info">
          <h2>{this.props.currentCity}</h2>
          <div className="weather-parameters">
            <p className="temperature">{this.props.currentTemperature}&deg;C</p>
            <p>{this.props.currentWeather}</p>
          </div>
          <div className="weather-parameters">
             <img src="../../images/arrow.ico"
                style={{transform: 'rotate(' + this.props.currentWindDirection + 'deg)', height: "50px"}}/>
            <p>{this.props.currentWindSpeed}m/s</p>
          </div>
        </div>
        <div className="current-details">
          {this.selectWeatherIcon(this.props.currentWeather)}
        </div>
      </div>
    );
  }

}

export default CurrentWeather;
