import React, {Component} from 'react';
import axios from "axios";

class CityList extends Component {

  renderCity(city) {
    return (
      <li key={city.id} onClick={() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&APPID=44f2f084f7e358bf70863f3ac77089bf`)
        .then((data) => {
          console.log(data.data);
        });
      }}>
        {city.name},
        {city.country},
        {city.id}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul className="city-list">
          {this.props.cityList.map(this.renderCity)}
        </ul>
      </div>
    );
  }
}

export default CityList;
