import React, {Component} from 'react';
import Searchbar from './Searchbar';
import CityList from './CityList';
import axios from "axios";


class App extends Component {

  state = {
    cityList: [],
    currentWeather : {}
  };

  cities = [];

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
      this.setState({cityList: cities});
    } else {
      this.setState({cityList: []});
    }
  };

  getCurrentWeather = (id) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=44f2f084f7e358bf70863f3ac77089bf`)
      .then((data) => {
        this.setState({currentWeather: data.data});
        console.log(this.state.currentWeather);
        console.log(data.data.main.temp);
        console.log(data.data.weather[0].description);
      });
  };


  render() {
    return (
      <nav>
        <div className="nav-container">
          <img src="../../images/logo.png" className="logo"/>
          <div className="search-container">
            <Searchbar findCities={this.findCities}/>
            <div className="city-list-container">
              <CityList cityList={this.state.cityList} getCurrentWeather={this.getCurrentWeather}/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}


export default App;
