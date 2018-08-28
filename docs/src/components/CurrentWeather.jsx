import React, { Component } from 'react';
import axios from 'axios';

var Wroclaw = `https://api.openweathermap.org/data/2.5/weather?id=3081368&APPID=4c0eb57e534b00b40e6b365d4bf8f924`;

class CurrentWeather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: null,
      pressure: null,
      humidity: null,
      wind: null,
      isLoaded: false,
      cityName: "",
    }
  }
  componentDidMount() {
    this.getWeather(this.props.identyfikator)
  }
  componentWillUpdate() {
    this.getWeather(this.props.identyfikator);
  }
  getWeather = (id) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=4c0eb57e534b00b40e6b365d4bf8f924`)
      .then(json => {
        this.setState({
          isLoaded: true,
          temp: json.data.main.temp,
          pressure: json.data.main.pressure,
          humidity: json.data.main.humidity,
          wind: json.data.wind.speed,
          cityName: json.data.name
        });
      });
  }


  render() {

    var { isLoaded, temp, pressure, humidity, wind, cityName } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div>
          {this.state.cityName} |
        {this.state.temp - 273.15}℃ |
        Pressure: {this.state.pressure}Pa |
        Humidity: {this.state.humidity}% |
        Wind: {this.state.wind}mph
      </div>
      );
    }
  }
}

export default CurrentWeather;
