import React, { Component } from 'react';
import axios from 'axios';

class CurrentWeather extends Component {

  getTemp() {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?id=3081368&APPID=44f2f084f7e358bf70863f3ac77089bf`)
      .then(data => {
        console.log(data.data.main.temp)
        console.log(data.data.main.pressure)
        console.log(data.data.main.humidity)
        console.log(data.data.weather);
      });
  }

  render() {
    return <button onClick={this.getTemp}>Click me to get current temperature</button>;
  }
}

export default CurrentWeather;
