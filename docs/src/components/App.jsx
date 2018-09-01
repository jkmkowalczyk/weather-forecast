import React, { Component } from 'react';
import Searchbar from './Searchbar';
import CityList from './CityList';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';
import NextWeekWeather from './NextWeekWeather';
import Moment from 'react-moment';
import 'moment-timezone';

class App extends Component {
  state = {
    cityList: [],
    currentCity: '',
    currentTemperature: '',
    currentWindDirection: '',
    currentWeather: '',
    currentWindSpeed: '',
    nextweekTemperatureDay: '',
    nextweekWindDirection: '',
    nextweekWeather: '',
    nextweekWindSpeed: '',
    nextweekDate: '',
  };

  cities = [];

  componentWillMount() {
    this.loadCities();
    this.getCurrentWeather(3081368);
    this.getNextWeekWeather(3081368);
  }

  loadCities = () => {
    $.getJSON('src/components/city.list.json', (data) => {
      this.cities = data;
    });
  };

  findCities = (query) => {
    if (query.length > 2) {
      const cities = this.cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
      this.setState({ cityList: cities });
    } else {
      this.setState({ cityList: [] });
    }
  };

  getCurrentWeather = (id) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=5ef08df67684d77f946df578d29b8c5e&units=metric`)
      .then((data) => {
        this.setState({
          currentTemperature: data.data.main.temp.toFixed(1),
          currentWeather: data.data.weather[0].description,
          currentCity: data.data.name,
          currentWindDirection: data.data.wind.deg,
          currentWindSpeed: data.data.wind.speed,
        });
        console.log(this.state.currentWeather);
      });
  };
  getNextWeekWeather = (id) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=5ef08df67684d77f946df578d29b8c5e&units=metric`)
      .then((data) => {
        this.setState({
          nextweekTemperatureDay: data.data.list[15].main.temp.toFixed(1),
          nextweekWeather: data.data.list[15].weather[0].description,
          currentCity: data.data.city.name,
          nextweekWindDirection: data.data.list[15].wind.deg,
          nextweekWindSpeed: data.data.list[15].wind.speed,
          nextweekDate: data.data.list[15].dt_txt,
        });
        console.log(this.state.nextweekWeather);
      });
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-container">
            <img src="../../images/logo.png" className="logo" />
            <div className="search-container">
              <Searchbar findCities={this.findCities} />
              <div className="city-list-container">
                <CityList
                  cityList={this.state.cityList}
                  getCurrentWeather={this.getCurrentWeather}
                  getNextWeekWeather={this.getNextWeekWeather}
                />
              </div>
            </div>
          </div>
        </nav>
        <div>
          <CurrentWeather
            currentWeather={this.state.currentWeather}
            currentTemperature={this.state.currentTemperature}
            currentCity={this.state.currentCity}
            currentWindDirection={this.state.currentWindDirection}
            currentWindSpeed={this.state.currentWindSpeed}
          />
        </div>
        <div>
          <NextWeekWeather
            nextweekWeather={this.state.nextweekWeather}
            nextweekTemperatureDay={this.state.nextweekTemperatureDay}
            currentCity={this.state.currentCity}
            nextweekDate={this.state.nextweekDate}
            nextweekWindDirection={this.state.nextweekWindDirection}
            nextweekWindSpeed={this.state.nextweekWindSpeed}
          />
        </div>
        <div>
          <NextWeekWeather
            nextweekWeather={this.state.nextweekWeather}
            nextweekTemperatureDay={this.state.nextweekTemperatureDay}
            currentCity={this.state.currentCity}
            nextweekDate={this.state.nextweekDate}
            nextweekWindDirection={this.state.nextweekWindDirection}
            nextweekWindSpeed={this.state.nextweekWindSpeed}
          />
        </div>
        <div>
          <NextWeekWeather
            nextweekWeather={this.state.nextweekWeather}
            nextweekTemperatureDay={this.state.nextweekTemperatureDay}
            currentCity={this.state.currentCity}
            nextweekDate={this.state.nextweekDate}
            nextweekWindDirection={this.state.nextweekWindDirection}
            nextweekWindSpeed={this.state.nextweekWindSpeed}
          />
        </div>
      </div>
    );
  }
}


export default App;
