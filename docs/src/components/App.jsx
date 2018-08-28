import React, { Component } from 'react';
import Searchbar from './Searchbar';
import CityList from './CityList';
import CurrentWeather from './CurrentWeather';
import axios from "axios";


class App extends Component {


  constructor(props) {
    super(props);
    this.state = { cityList: [], identyfikator: 2804316 };
  };
  cities = [];

  myCallback = (dataFromChild) => {
    this.setState({ identyfikator: dataFromChild });
    console.log("this is" + this.state.identyfikator)
  }
  componentWillMount() {
    this.loadCities();
  }

  loadCities = () => {
    $.getJSON("src/components/city.list.json", (data) => {
      this.cities = data;
    });
  };


  findCities = (query) => {
    if (query.length > 2) {
      let cities = this.cities.filter(function (city) {
        return (city.name.toLowerCase().includes(query.toLowerCase()));
      });
      this.setState({ cityList: cities });
    } else {
      this.setState({ cityList: [] });
    }
  };

  getCurrentWeather = (id) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=4c0eb57e534b00b40e6b365d4bf8f924`)
      .then((data) => {
        console.log(data.data);
        console.log(data.data.main.temp);
        console.log(data.data.weather[0].description);
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
                <CityList identyfikator={this.state.identyfikator} cityList={this.state.cityList} callbackFromParent={this.myCallback} getCurrentWeather={this.getCurrentWeather} />
              </div>
            </div>
          </div>
        </nav>

        <div className="current-weather-container">
          <CurrentWeather getCurrentWeather={this.getCurrentWeather} identyfikator={this.state.identyfikator} />
        </div>
      </div>
    );
  }
}


export default App;
