import React, { Component } from 'react';
import axios from 'axios';

class CityList extends Component {
  constructor(props) {
    super(props);
  }


  renderCity = city => (
    <li
      key={city.id}
      onClick={() => this.props.getCurrentWeather(city.id)
        // POBIERANIE LOKALIZACJI PO IP
        // axios.get('http://api.ip2geo.pl/json/?ip=5.226.96.177')
        //   .then((data) => {
        //     console.log(data.data);
        //   });
      }
    >
      {city.name}, {city.country}
    </li>
  );
renderCity2 = city => (
  <li
    key={city.id}
    onClick={() => this.props.getNextWeekWeather(city.id)
}
  >
    { city.name }, { city.country }
  </li >
);


render() {
  return (<ul className="city-list">
    {this.props.cityList.map(this.renderCity)}
    {this.props.cityList.map(this.renderCity2)}
          </ul>);
}
}

export default CityList;
