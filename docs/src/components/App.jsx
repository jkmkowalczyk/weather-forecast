import React, {Component} from 'react';
import Searchbar from './Searchbar';
import CityList from './CityList';
import CurrentWeather from './CurrentWeather';


class App extends Component {

  state = {
    cityList: [],
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


  render() {
    return (
      <nav>
        <div className="nav-container">
          <img src="../../images/logo.png" className="logo"/>
          <div className="search-container">
            <Searchbar findCities={this.findCities}/>
            <div className="city-list-container">
              <CityList cityList={this.state.cityList}/>
            </div>
            <CurrentWeather/>
          </div>
        </div>
      </nav>
    );
  }
}


export default App;
