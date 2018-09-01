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
    nextweekTemperatureDay2: '',
    nextweekWindDirection2: '',
    nextweekWeather2: '',
    nextweekWindSpeed2: '',
    nextweekDate2: '',
    nextweekTemperatureDay3: '',
    nextweekWindDirection3: '',
    nextweekWeather3: '',
    nextweekWindSpeed3: '',
    nextweekDate3: '',
  };

  cities = [];

  componentWillMount() {
    this.loadCities();
    this.getCurrentWeather(3081368);
    this.getNextWeekWeather(3081368);
    this.getNextWeekWeather2(3081368);
    this.getNextWeekWeather3(3081368);
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
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=5ef08df67684d77f946df578d29b8c5e&units=metric`,)
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
      .get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=5ef08df67684d77f946df578d29b8c5e&units=metric`,)
      .then((data) => {
        this.setState({
          nextweekTemperatureDay: data.data.list[7].main.temp.toFixed(1),
          nextweekWeather: data.data.list[7].weather[0].description,
          nextweekWindDirection: data.data.list[7].wind.deg,
          nextweekWindSpeed: data.data.list[7].wind.speed,
          nextweekDate: data.data.list[7].dt_txt,
        });
        console.log(this.state.nextweekWeather);
      });
  };

  getNextWeekWeather2 = (id) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=5ef08df67684d77f946df578d29b8c5e&units=metric`,)
      .then((data) => {
        this.setState({
          nextweekTemperatureDay2: data.data.list[15].main.temp.toFixed(1),
          nextweekWeather2: data.data.list[15].weather[0].description,
          nextweekWindDirection2: data.data.list[15].wind.deg,
          nextweekWindSpeed2: data.data.list[15].wind.speed,
          nextweekDate2: data.data.list[15].dt_txt,
        });
        console.log(this.state.nextweekWeather2);
      });
  };

  getNextWeekWeather3 = (id) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=5ef08df67684d77f946df578d29b8c5e&units=metric`, )
      .then((data) => {
        this.setState({
          nextweekTemperatureDay3: data.data.list[23].main.temp.toFixed(1),
          nextweekWeather3: data.data.list[23].weather[0].description,
          nextweekWindDirection3: data.data.list[23].wind.deg,
          nextweekWindSpeed3: data.data.list[23].wind.speed,
          nextweekDate3: data.data.list[23].dt_txt,
        });
        console.log(this.state.nextweekWeather3);
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
                  getNextWeekWeather2={this.getNextWeekWeather2}
                  getNextWeekWeather3={this.getNextWeekWeather3}
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
            nextweekWeather={this.state.nextweekWeather2}
            nextweekTemperatureDay={this.state.nextweekTemperatureDay2}
            currentCity={this.state.currentCity2}
            nextweekDate={this.state.nextweekDate2}
            nextweekWindDirection={this.state.nextweekWindDirection2}
            nextweekWindSpeed={this.state.nextweekWindSpeed2}
          />
        </div>
        <div>
          <NextWeekWeather
            nextweekWeather={this.state.nextweekWeather3}
            nextweekTemperatureDay={this.state.nextweekTemperatureDay3}
            currentCity={this.state.currentCity3}
            nextweekDate={this.state.nextweekDate3}
            nextweekWindDirection={this.state.nextweekWindDirection3}
            nextweekWindSpeed={this.state.nextweekWindSpeed3}
          />
        </div>
      </div>
    );
  }
}


export default App;
